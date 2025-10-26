package main

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"os"

	"cloud.google.com/go/firestore"
	"google.golang.org/api/iterator"
	"github.com/joho/godotenv"
)

var client *firestore.Client

type Yarn struct {
	ID        string `firestore:"-" json:"id"`
	Brand     string `firestore:"brand" json:"brand"`
	ColorCode string `firestore:"colorCode" json:"colorCode"`
	Thickness string `firestore:"thickness,omitempty" json:"thickness,omitempty"`
	Remaining string `firestore:"remaining,omitempty" json:"remaining,omitempty"`
	Notes     string `firestore:"notes,omitempty" json:"notes,omitempty"`
	ImageURL  string `firestore:"imageUrl,omitempty" json:"imageUrl,omitempty"`
}

func initFirestore() {
	ctx := context.Background()

	// .env読み込み
	_ = godotenv.Load()
	projectID := os.Getenv("GCP_PROJECT_ID")
	if projectID == "" {
		log.Fatal("GCP_PROJECT_ID is not set in .env")
	}

	var err error
	client, err = firestore.NewClient(ctx, projectID)
	if err != nil {
		log.Fatalf("Failed to create Firestore client: %v", err)
	}
}

func yarnsHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("yarns start")
    // CORS 対応
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Content-Type", "application/json")
	
	ctx := context.Background()

	iter := client.Collection("yarns").Documents(ctx)
	var yarns []Yarn

	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			log.Printf("Failed to iterate: %v", err)
			break
		}
		if doc == nil {
			log.Println("Got nil document snapshot")
			continue
		}

		var y Yarn
		if err := doc.DataTo(&y); err != nil {
            log.Printf("DataTo error: %v", err)
			log.Printf("Failed to parse document %v: %v", doc.Ref.ID, err)
			continue
		}
		y.ID = doc.Ref.ID
		yarns = append(yarns, y)
	}

	// w.Header().Set("Content-Type", "application/json")
	// if err := json.NewEncoder(w).Encode(yarns); err != nil {
	// 	http.Error(w, err.Error(), http.StatusInternalServerError)
	// }
    json.NewEncoder(w).Encode(yarns)
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("ok"))
}


func main() {
	initFirestore()
	defer client.Close()

	// http.HandleFunc("/yarns", yarnsHandler)
	http.HandleFunc("/health", healthHandler)
	http.HandleFunc("/yarns", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			yarnsHandler(w, r)
		case http.MethodPost:
			createYarnHandler(w, r)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // fallback
	}
	log.Printf("Listening on port %s", port)
	if err := http.ListenAndServe("0.0.0.0:"+port, nil); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}

func createYarnHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	var newYarn Yarn
	if err := json.NewDecoder(r.Body).Decode(&newYarn); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	ctx := context.Background()
	client, err := firestore.NewClient(ctx, os.Getenv("GCP_PROJECT_ID"))
	if err != nil {
		http.Error(w, "Failed to connect Firestore", http.StatusInternalServerError)
		return
	}
	defer client.Close()

	docRef, _, err := client.Collection("yarns").Add(ctx, newYarn)
	if err != nil {
		http.Error(w, "Failed to save yarn", http.StatusInternalServerError)
		return
	}

	newYarn.ID = docRef.ID
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(newYarn)
}


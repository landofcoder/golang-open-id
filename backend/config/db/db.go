package db

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/mongo"

	"go.mongodb.org/mongo-driver/mongo/options"
)

func GetDBCollection() (*mongo.Database, error) {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017/")
	client, err := mongo.Connect(context.TODO(), clientOptions)
	// Check the connection
	if err != nil {
		log.Fatal(err)
		return nil, err
	}
	mongoDb := client.Database("lofopenid_io")
	return mongoDb, nil
}

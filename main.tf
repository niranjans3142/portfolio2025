terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "6.8.0"
    }
  }
}

provider "google" {
  project = "website-467214"
  region  = "asia-south1"
  zone    = "asia-south1-b"
}

resource "google_compute_network" "vpc_network" {
  name = "terraform-network"
}

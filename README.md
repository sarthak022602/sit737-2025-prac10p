# SIT737 - Cloud Native Application Development  
## Task 10.1P – Microservice Deployment and Monitoring (2025)

This repository contains the complete implementation and documentation for Task 10.1P of SIT737. The task involves creating a fresh Node.js microservice, containerizing it using Docker, deploying it to Kubernetes, and configuring monitoring and observability via Google Cloud Platform.

---

## 📁 Project Structure


---

## 🚀 Steps Performed

1. **Node.js App Setup** – Created a new Express app on port `3007`.
2. **Dockerized** – Built using an Alpine Node base image.
3. **Kubernetes Deployment** – Applied deployment and service manifests.
4. **MongoDB Integration** – Deployed as a separate pod using secrets for credentials.
5. **DockerHub Push** – Tagged and pushed the app image to [DockerHub](https://hub.docker.com/u/sarthak22602).
6. **GKE Monitoring** – Configured Google Cloud Monitoring and Logs (fallback used due to permission limitations).
7. **Health Checks** – Uptime Check configured and validated.
8. **Report Included** – Annotated screenshots and written documentation included.

---

## 🔗 Live Access

> The app is accessible via `http://localhost:31007` in local Kubernetes or via port-forwarding on GKE.

---

## 📷 Monitoring Snapshots

All screenshots are provided in the `/screenshots` folder and referenced in the final PDF report. This includes:

- GCP Monitoring Dashboard
- `kubectl get` outputs
- DockerHub push confirmation
- Metrics server setup
- Uptime checks and logs

---

## ✅ Submission Link

> GitHub Repository:  
> https://github.com/sarthak022602/sit737-2025-prac10p

---

## 🧑‍💻 Author

**Sarthak Dutta**  
Student ID: *<224174895>*  
Unit: SIT737 – Cloud Native Application Development  
Trimester 1, 2025


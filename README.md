# React basic

[![Azure Static Web Apps CI/CD](https://github.com/MahrRah/wedding-homepage/actions/workflows/azure-static-web-apps-wonderful-island-0e26c8d03.yml/badge.svg)](https://github.com/MahrRah/wedding-homepage/actions/workflows/azure-static-web-apps-wonderful-island-0e26c8d03.yml)

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Setup

### 1.Static app

Use the [Quickstart](https://learn.microsoft.com/en-gb/azure/static-web-apps/getting-started?tabs=react) instruction to create a Resource group and Static app resource.

### 2. Database

Create a `Azure Cosmos DB for MongoDB` resource.
Capacity mode = Servless
Version=4.0

### 3. SendGrid

> Note: needs valid creditcards associated to Azure subscription.

### 4. Secretes

Add all secrets under the application conifguration of the static web app resoruce.

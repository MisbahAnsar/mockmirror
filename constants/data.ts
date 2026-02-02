export const stats = [
  { label: "Endpoints Created", value: "10K+" },
  { label: "Requests Served", value: "500K+" },
  { label: "Avg. Response Time", value: "<50ms" },
];

export const useCases = [
  "API Mocking",
  "Frontend Testing",
  "Development Prototyping",
  "Integration Testing",
  "Demo & Presentations",
  "CI/CD Pipelines",
  "API Documentation",
  "Load Testing",
];

export const codeTabs = ["cURL", "JavaScript", "Python", "Go", "Rust"];

export const codeSnippets: Record<string, string> = {
  cURL: `curl https://api.mockmirror.dev/v1/mocks/abc123

# Returns: {"hello": "world", "ok": true}`,
  JavaScript: `const response = await fetch('https://api.mockmirror.dev/v1/mocks/abc123');

const data = await response.json();
console.log(data);
// Returns: {"hello": "world", "ok": true}`,
  Python: `import requests

response = requests.get('https://api.mockmirror.dev/v1/mocks/abc123')
data = response.json()

print(data)
# Returns: {"hello": "world", "ok": true}`,
  Go: `package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    resp, _ := http.Get("https://api.mockmirror.dev/v1/mocks/abc123")
    defer resp.Body.Close()
    
    var data map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&data)
    fmt.Println(data)
}`,
  Rust: `use reqwest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let res = client
        .get("https://api.mockmirror.dev/v1/mocks/abc123")
        .send()
        .await?;

    let data: serde_json::Value = res.json().await?;
    println!("{:?}", data);
    
    Ok(())
}`,
};

export const useCaseCards = [
  {
    title: "Hackathons",
    stack: "Rapid Development",
    desc: "Instead of using dummy data or hardcoded JSON, create real mock API endpoints in seconds. Focus on building your idea while MockMirror handles the backend simulation.",
  },
  {
    title: "Freelance Projects",
    stack: "Client Work",
    desc: "Create mock endpoints for client projects during development. When the real API is ready, simply swap the URL—no need to rewrite dummy code or change your implementation.",
  },
  {
    title: "Client Demos",
    stack: "Presentations",
    desc: "Showcase your frontend work with live mock endpoints. Create realistic API responses to demonstrate functionality before the backend is complete, impressing clients with a working prototype.",
  },
];



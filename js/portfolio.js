document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-birth-year]").forEach((age) => {
    const birthYear = Number(age.dataset.birthYear);
    age.textContent = String(new Date().getFullYear() - birthYear);
  });

  const skillLogos = {
    AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    Azure: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    GCP: "https://cdn.simpleicons.org/googlecloud",
    Kubernetes: "https://cdn.simpleicons.org/kubernetes",
    "ArgoCD/ArgoWorkflows": "https://cdn.simpleicons.org/argo",
    Docker: "https://cdn.simpleicons.org/docker",
    Terraform: "https://cdn.simpleicons.org/terraform",
    GitHub: "https://cdn.simpleicons.org/github",
    Jira: "https://cdn.simpleicons.org/jira",
    Sentry: "https://cdn.simpleicons.org/sentry",
    PostgreSQL: "https://cdn.simpleicons.org/postgresql",
    Snowflake: "https://cdn.simpleicons.org/snowflake",
    Databricks: "https://cdn.simpleicons.org/databricks",
    Tableau: "images/salesforce-logo.svg",
    Streamlit: "https://cdn.simpleicons.org/streamlit",
    LangChain: "https://cdn.simpleicons.org/langchain",
    HuggingFace: "https://cdn.simpleicons.org/huggingface",
    TensorFlow: "https://cdn.simpleicons.org/tensorflow",
    PyTorch: "https://cdn.simpleicons.org/pytorch",
    MLflow: "https://cdn.simpleicons.org/mlflow",
    "OpenAI Agents SDK": "images/openai-mark.svg",
    "Google Agents SDK": "https://cdn.simpleicons.org/google",
    "Anthropic Agents SDK": "https://cdn.simpleicons.org/anthropic",
    LangSmith: "https://cdn.simpleicons.org/langchain",
    MCP: "https://cdn.simpleicons.org/anthropic",
    "A2A (Google)": "https://cdn.simpleicons.org/google",
    Python: "https://cdn.simpleicons.org/python"
  };

  const monograms = {
    "Tupperware (Meta Internal Container Orchestration)": "TW",
    "Sandcastle (Meta Internal CI)": "SC",
    "Conveyor (Meta Internal CD)": "CV",
    "Sapling (Meta Internal Version Control)": "SL",
    MCP: "MCP",
    "A2A (Google)": "A2A"
  };

  document.querySelectorAll(".skill-tag").forEach((skill) => {
    const label = skill.textContent.trim();
    const logoUrl = skillLogos[label];
    if (logoUrl) {
      const logo = document.createElement("img");
      logo.className = "skill-logo";
      logo.src = logoUrl;
      logo.alt = "";
      logo.loading = "lazy";
      logo.addEventListener("error", () => {
        const fallback = document.createElement("span");
        fallback.className = "skill-monogram";
        fallback.textContent = monograms[label] || label.slice(0, 3).toUpperCase();
        logo.replaceWith(fallback);
      });
      skill.prepend(logo);
    } else {
      const monogram = document.createElement("span");
      monogram.className = "skill-monogram";
      monogram.textContent = monograms[label] || label.slice(0, 3).toUpperCase();
      skill.prepend(monogram);
    }
  });
});

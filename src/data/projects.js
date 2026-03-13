export const projects = [
  {
    name: 'GitOps Deployment Generator',
    description:
      'CLI tool that detects application type and generates Dockerfile, Helm charts and ArgoCD manifests.',
    tech: ['Go', 'Kubernetes', 'Helm', 'ArgoCD'],
    github: 'https://github.com/Kakrottt/gitops-deployment-generator',
  },
  {
    name: 'Terraform Infra Builder',
    description:
      'Generates Terraform infrastructure modules from simple configuration inputs.',
    tech: ['Go', 'Terraform', 'AWS'],
    github: 'https://github.com/Kakrottt/terraform-infra-builder',
  },
  {
    name: 'Prometheus Rules Factory',
    description:
      'Generates Prometheus alerting and recording rules from mixins and jsonnet.',
    tech: ['Prometheus', 'Jsonnet', 'Python'],
    github: 'https://github.com/Kakrottt/prometheus-rules-factory',
  },
  {
    name: 'Kubernetes General Scaler',
    description:
      'Custom autoscaler scaling workloads using Redis queue length or custom metrics.',
    tech: ['Python', 'Kubernetes', 'Prometheus'],
    github: 'https://github.com/Kakrottt/k8s-scaler',
  },
  {
    name: 'Open Tunnel',
    description: 'Self-hosted tunneling service similar to ngrok.',
    tech: ['Python', 'Networking', 'Docker'],
    github: 'https://github.com/Kakrottt/open-tunnel',
  },
]

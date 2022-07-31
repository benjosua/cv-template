# CV Template

This is a node.js application powered by EJS to deliver dynamically generated resumes using data stored in a json file.

![Image](https://github.com/benjosua/cv-template/blob/main/banner.PNG?raw=true)

---

## Features

- Enter resume data into resume.json file
- Provide dynmaic resume with specified data

## Planned features

- CMS for JSON file
- possibility to export as PDF

</br>

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 16.13.1

# Getting started

- Clone the repository

```
git clone https://github.com/benjosua/cv-template.git
```

- Install dependencies

```
cd cv-template
npm install
```

- Run the project

```
npm start
```

- Navigate to `http://localhost:3000`

# Input data into resume.json

```json
{
  "name": "string",
  "website": "string",
  "email": "string",
  "phone": 123,
  "role": "string",
  "location": "string",
  "github": "string",
  "introduction": "string",
  "experience": [
    {
      "name": "string",
      "role": "string",
      "location": "string",
      "list": [
        "string"
      ]
    }
  ],
  "projects": [
    {
      "name": "string",
      "link": "string",
      "list": [
        "string"
      ]
    }
  ],
  "education": {
    "degree": "string",
    "location": "string"
  }
}

```
# PasswordStrengthApp

An application for testing password strength.

## Description

- The application contains a field for entering a password. Under the field are placed 3 sections that show the strength of the password;
- Changes in password strength take place in real time;
- How the strength of a password is calculated:
  - Only letters / digits / symbols - the password is easy;
  - Combination of letters-symbols / letters-digits / digits-symbols - the password is medium;
  - Has letters, symbols, and numbers - the password is strong;
- The color of the sections depends on the strength of the password:
  - If the field is empty - all sections are gray;
  - If the field has less than 8 characters - all sections are red;
  - If the password is easy - the first section is red, the rest are gray;
  - If the password is medium - the first two sections are yellow, the last one is gray;
  - If the password is strong - all sections are green.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `ng serve`.
4. Open your browser and navigate to `http://localhost:4200/`.

## Screenshots

Empty password:
<img src="/src/assets/screen_empty.png" alt="screenshot of empty password" width="300"/>

Short password:
<img src="/src/assets/screen_short.png" alt="screenshot of short password" width="300"/>

Easy password:
<img src="/src/assets/screen_easy.png" alt="screenshot of easy password" width="300"/>

Medium password:
<img src="/src/assets/screen_medium.png" alt="screenshot of medium password" width="300"/>

Strong password:
<img src="/src/assets/screen_strong.png" alt="screenshot of strong password" width="300"/>

## Additional Resources

- [Angular Documentation](https://angular.io/docs)

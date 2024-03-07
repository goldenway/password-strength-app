# PasswordStrengthApp

An application for testing password strength.

## Description

- The application contains a field for entering a password. Under the field are placed 3 sections that show the strength of the password;
- Changes in password strength take place in real time;
- How the strength of a password is calculated:
  1. Only letters / digits / symbols - the password is easy;
  2. Combination of letters-symbols / letters-digits / digits-symbols - the password is medium;
  3. Has letters, symbols, and numbers - the password is strong;
- The color of the sections depends on the strength of the password:
  1. If the field is empty - all sections are gray;
  2. If the field has less than 8 characters - all sections are red;
  3. If the password is easy - the first section is red, the rest are gray;
  4. If the password is medium - the first two sections are yellow, the last one is gray;
  5. If the password is strong - all sections are green.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `ng serve`.
4. Open your browser and navigate to `http://localhost:4200/`.

## Additional Resources

- [Angular Documentation](https://angular.io/docs)

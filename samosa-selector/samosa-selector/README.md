# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Step 1: Creating the User Interface

For this first step we added in a picture of a samosa and work on the CSS code. In the CSS we adjust the size of the image. We also add some basic title and text information. 

<img width="1392" height="856" alt="image" src="https://github.com/user-attachments/assets/9cd72610-f591-4fec-be00-761ed69b945e" />

# Step 2: Add a counter

For this step we created a counter variable to count the amount of times we click the image. We also added a multiplier variable that will be used to add bonuses.

<img width="1396" height="856" alt="image" src="https://github.com/user-attachments/assets/ff171a1b-3b76-4d2e-93e2-8ab058df44f1" />

# Step 3: Add upgrades

Added some upgrades and modifiers so you can click to earn a multiplied amount of samosas. This will use upgrade handlers to increase the count appropriately.

<img width="1210" height="960" alt="image" src="https://github.com/user-attachments/assets/b76a6d71-c9bc-4e1b-9141-dca202e75835" />

# Step 4: Handle Upgrades

This step lets us handle the upgrades for the samosas. Once a certain milestone is reached we can click it and the multiplier methods will generate the multiplier value based on how many samosas we are at and begin adding them onto the count variable with each new click.

[!Video](https://github.com/user-attachments/assets/f9354ace-b205-42ed-8720-18c623109849)








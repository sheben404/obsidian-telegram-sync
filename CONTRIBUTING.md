## 👨‍💻 Steps to Contribute Code

1. **Fork the Repository**: Click the "Fork" button at the top of the repository page.

2. **Clone the Repository**: In your new fork, click the "Code" button and copy the URL. Then run `git clone [URL]`.

3. **Create a New Branch**: Navigate to the project directory and create a new branch from `main`:
   ```bash
   git checkout main
   git checkout -b [branch-name]
   ```

4. **Make Your Changes**: Implement your changes. Do not manually update the plugin version.

5. **Commit Your Changes**: We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
    - `feat`: new feature
    - `fix`: bug fix
    - `docs`: documentation changes
    - `refactor`: code changes without adding features or fixing bugs
    - `test`: adding or correcting tests

6. **Push and Create a Pull Request**: Push your branch and create a PR targeting the `main` branch.

---

## 📦 Release Process

Releases are automated via GitHub Actions. To publish a new version:

1. Update the version in `package.json` and `manifest.json`
2. Commit the version bump
3. Create and push a git tag:
   ```bash
   git tag <version>
   git push origin <version>
   ```
4. The CI will automatically build the plugin and create a GitHub Release with `main.js`, `manifest.json`, and `styles.css`.

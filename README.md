# SSH Key Setup for GitHub on RHEL

## Steps to Add an SSH Key for GitHub on RHEL

1. **Check for Existing SSH Keys**

    Open a terminal on your RHEL system and run the following command to check for existing SSH keys:
    ```bash
    ls -al ~/.ssh
    ```

    If you see files like `id_rsa` and `id_rsa.pub`, you already have an SSH key.

2. **Generate a New SSH Key**

    Run the following command to generate a new SSH key:
    ```bash
    ssh-keygen -t ed25519 -C "your_email@example.com"
    ```

    If your system doesn't support `ed25519`, use:
    ```bash
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```

3. **Add the SSH Key to the SSH Agent**

    Start the SSH agent and add the private key:
    ```bash
    eval "$(ssh-agent -s)"
    ```

    Then add your SSH private key:
    ```bash
    ssh-add ~/.ssh/id_rsa
    ```

4. **Copy the SSH Key to Your Clipboard**

    Run the following command to display your public SSH key:
    ```bash
    cat ~/.ssh/id_rsa.pub
    ```

    Highlight and copy the output to add it to your GitHub account.

5. **Add the SSH Key to Your GitHub Account**
    - Log into GitHub.
    - Navigate to **Settings > SSH and GPG keys**.
    - Click **New SSH key**, give it a title, and paste your public key.
    - Click **Add SSH key**.

6. **Test the SSH Connection**

    To verify the SSH connection, run:
    ```bash
    ssh -T git@github.com
    ```

7. **Using SSH with GitHub**

    To clone a repository using SSH, use the following command:
    ```bash
    git clone git@github.com:username/repository.git
    ```

---

## Example Workflow

1. **Clone a Repository**

    ```bash
    git clone git@github.com:username/repository.git
    ```

2. **Make Changes Locally**

    Edit your project files locally as needed.

3. **Add and Commit Changes**

    Add the changes to the staging area:
    ```bash
    git add .
    ```

    Commit the changes:
    ```bash
    git commit -m "Describe your changes"
    ```

4. **Push Changes to GitHub**

    Push the changes to GitHub:
    ```bash
    git push origin main
    ```

---

By following these steps, you will have your SSH key set up for GitHub on RHEL, and you'll be able to interact with your repositories securely over SSH.

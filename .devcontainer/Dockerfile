# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.134.0/containers/javascript-node/.devcontainer/base.Dockerfile
ARG VARIANT="14"
ARG USERNAME=node
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# Install additional OS packages
RUN apt-get update -yq && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -yq install --no-install-recommends vim \
        sudo \
        xtail \
        fish \
        zsh \
    # Install GitHub CLI v 0.11.0
    && echo "Downloading github CLI..." \
    && curl -OL https://github.com/cli/cli/releases/download/v0.11.0/gh_0.11.0_linux_amd64.deb \
    && echo "Installing github CLI..." \
    && apt install ./gh_0.11.0_linux_amd64.deb \
    && echo "Removing github CLI deb file after installation..." \
    && rm -rf ./gh_0.11.0_linux_amd64.deb \
    # Install Git LFS
    && curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash \
    && apt-get install -yq git-lfs \
    && git lfs install \
    # Install PowerShell
    && curl -s https://packages.microsoft.com/keys/microsoft.asc | (OUT=$(apt-key add - 2>&1) || echo $OUT) \
    && echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-debian-stretch-prod stretch main" > /etc/apt/sources.list.d/microsoft.list \
    && apt-get update -yq \
    && apt-get install -yq powershell

# Install `oh-my-zsh`
RUN sh -c "$(wget -O- https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" "" --unattended &> /dev/null

# Updte env variables
ENV ENV="/home/$USERNAME/.ashrc" \
    ZSH=/home/$USERNAME/.oh-my-zsh \
    EDITOR=nano

# Set `zsh` config.
RUN printf 'ZSH_THEME="robbyrussell"\nENABLE_CORRECTION="false"\nplugins=(git node wd colored-man-pages)\nsource $ZSH/oh-my-zsh.sh\nalias gpfnv="gpf --no-verify"\nalias gpnv="git push --no-verify"\nalias gcm="git checkout main"\nalias gcn="git checkout next"' > "/home/$USERNAME/.zshrc"
RUN echo "exec `which zsh`" > "/home/$USERNAME/.ashrc"

# Install pnpm globally
RUN sudo -u node npm install -g pnpm

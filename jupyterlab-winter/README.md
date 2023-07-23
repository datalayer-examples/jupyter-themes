[![Datalayer](https://assets.datalayer.tech/datalayer-25.svg)](https://datalayer.io)

[![Become a Sponsor](https://img.shields.io/static/v1?label=Become%20a%20Sponsor&message=%E2%9D%A4&logo=GitHub&style=flat&color=1ABC9C)](https://github.com/sponsors/datalayer)

## Winter Theme for JupyterLab

<div align="center" style="text-align: center">
  <img alt="JupyterLab Theme Winter" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyterlab-theme-winter.png" />
</div>

> Design by [Isabela Presedo-Floyd](https://github.com/isabela-pf), coded with the help of Jovyans at [Quansight](https://github.com/quansight)

## Install

```bash
pip install -e .[test]
jupyter labextension develop . --overwrite
jupyter labextension list
jupyter server extension list
yarn jupyterlab
```

## Use

```bash
conda create -y -n datalayer python=3.11 && \
  conda activate datalayer && \
  pip install jupyterlab==4.0.0 jupyter_theme_winter

# How to launch jupyter lab with a defined theme?
mkdir -p ~/.jupyter/lab/user-settings/\@jupyterlab/apputils-extension && \
  CONF="{ \"theme\": \"Winter\" }" && \
  cat > ~/.jupyter/lab/user-settings/\@jupyterlab/apputils-extension/themes.jupyterlab-settings  <<EOF
${CONF}
EOF
jupyter lab
```

> TODO

- Update the Launcher page with something like e.g. https://github.com/fcollonval/jlab-enhanced-launcher
- Strip down the variables.css to only the needed css?
- Bring more fancy ui like in https://github.com/timkpaine/jupyterlab_miami_nights: Search tool + neon billboard + Collapser + neon light + Scrollbar + FM-84's "Atlas" (compatible with webKit browsers) + A surprise in the presentation mode (Top menu --> View --> Presention mode)

## Develop

```bash
# Build the extension and link for dev in shell 1.
jupyter labextension develop --overwrite
```

```bash
# List extensions.
jupyter labextension list
pip list | grep datalayer
```

```bash
# Run and watch jupyterlab in shell 1.
jlpm watch
```

```bash
# Run and watch jupyterlab in shell 2.
# Look at the remote entry javascript, a webpack5 feature.
mkdir ~/notebooks && \
  jupyter lab \
    --dev-mode \
    --watch \
    --notebook-dir=~/notebooks \
    --ServerApp.token= \
    --extensions-in-dev-mode
```

## Build

```bash
# Generate sourcemaps.
jupyter labextension build --development True .
jupyter lab build --minimize=False
```

```bash
# Do not generate sourcemaps.
jupyter labextension build .
jupyter lab build
```

## Publish

```bash
pip install jupyter_packaging twine && \
  python setup.py sdist bdist_wheel && \
  twine upload dist/*
```

```bash
jlpm build:lib && \
  npm publish --access public
```

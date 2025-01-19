---
layout: '@layout/Layout.astro'
---
# 

## ジョブを実行する順番
全てのジョブは同時に走る。

## 実際に `config.yml`にワークフローを改定みよう！

### **executors**キー
```yaml
version: 2.1 # 2.1以降じゃないとexecutors使えない
executors:
  my-executor:
    docker:
      - image: cimg/ruby:2.7.1-node
jobs:
  build:
    executor: my-executor
    steps:
      -run: echo Hello World
```
### **executors**キー
```yaml
version: 2.1 # 2.1以降じゃないとexecutors使えない
commands:
  sayhello:
    steps:
      -run: echo Hello World

jobs:
  build:
    docker:
      - image
```
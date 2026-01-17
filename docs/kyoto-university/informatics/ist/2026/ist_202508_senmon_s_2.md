---
sidebar_label: "2025年8月実施 専門科目 S-2"
tags:
  - Kyoto-University
  - Machine-Learning
---
# 京都大学 情報学研究科 知能情報学専攻 2025年8月実施 専門科目 S-2

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Let us consider a binary classification problem in which a real-valued vector $\mathbf{X}$ in a $d$-dimensional space is classified into a class $y \in \{0, 1\}$. The boundary between class 0 and class 1 in this space defined by a classification method is referred to as the decision boundary.

### Q.1
Let $\mathbf{P}_0$ be a prototype vector of class 0 and $\mathbf{P}_1$ be a prototype vector of class 1, and consider a method to classify $\mathbf{X}$ into the class with a smaller squared distance between its prototype vector and $\mathbf{X}$. Derive an equation of the decision boundary and show whether it is linear or not. Here we assume $\mathbf{P}_0 \neq \mathbf{P}_1$.

### Q.2
Assume that class 0 follows a multi-variate normal distribution with a mean vector $\mathbf{M}_0$ and a covariance matrix $\Sigma$, and that class 1 follows a normal distribution with a mean vector $\mathbf{M}_1$ and the same covariance matrix $\Sigma$. Then, we consider a method to classify $\mathbf{X}$ into the class with a larger likelihood for $\mathbf{X}$. Derive an equation of the decision boundary and show whether it is linear or not. Here we assume that there exists an inverse matrix of $\Sigma$, and $\mathbf{M}_0 \neq \mathbf{M}_1$.

### Q.3
Consider a method that models the posterior probability of class 1 given $\mathbf{X}$, $p(y=1|\mathbf{X})$, with the standard sigmoid function of the inner product $\mathbf{W} \cdot \mathbf{X}$, where $\mathbf{W}$ is a weight parameter vector. Derive the logarithm of the ratio of the posterior probabilities of class 0 and class 1, and show whether it is linear or not.

### Q.4
In the method of Q.3, let us define the loss function with the binary cross-entropy of the posterior probabilities of class 0 and class 1. Derive its gradient with respect to the weight parameter $\mathbf{W}$ by showing the derivation process.

### Q.5
Describe a method to extend the method of Q.3 and Q.4 to a multi-class classification problem. Specifically, show a function to compute the posterior probability of class $i$ and a loss function, together with its gradient with respect to the weight parameter. You do not have to show the derivation process.

### Q.6
Briefly describe a method to extend the method of Q.5 to a multi-layer feed-forward neural network. Specifically, show an activation function used in each layer and a loss function, together with a method to compute the gradients with respect to the weight parameters.
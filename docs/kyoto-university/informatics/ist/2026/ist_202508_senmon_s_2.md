---
sidebar_label: 2025年8月実施 専門科目 S-2
tags:
  - Kyoto-University
  - Data-Science-Artificial-Intelligence.Machine-Learning.Nearest-Centroid-Classifier
  - Data-Science-Artificial-Intelligence.Machine-Learning.Linear-Discriminant-Analysis
  - Data-Science-Artificial-Intelligence.Machine-Learning.Logistic-Regression
  - Data-Science-Artificial-Intelligence.Machine-Learning.Softmax-Regression
  - Data-Science-Artificial-Intelligence.Machine-Learning.Feedforward-Neural-Network
  - Data-Science-Artificial-Intelligence.Machine-Learning.Backpropagation
---
# 京都大学 情報学研究科 知能情報学専攻 2025年8月実施 専門科目 S-2

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2025_ist.pdf)
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

### 题目描述

考虑二分类问题：把 $d$ 维空间中的实向量 $\mathbf X$ 分类到 $y\in\{0,1\}$。某分类方法在该空间中划分类别 0 与类别 1 的边界称为决策边界。

1. 设 $\mathbf P_0,\mathbf P_1$ 分别是类别 0、1 的原型向量。把 $\mathbf X$ 分到其原型与 $\mathbf X$ 的平方距离较小的类别。推导决策边界方程，并说明该边界是否为线性边界。假设 $\mathbf P_0\ne\mathbf P_1$。

2. 假设类别 0 服从均值向量为 $\mathbf M_0$、协方差矩阵为 $\Sigma$ 的多元正态分布，类别 1 服从均值向量为 $\mathbf M_1$、协方差矩阵同为 $\Sigma$ 的多元正态分布。采用把 $\mathbf X$ 分到对它具有较大似然的类别的方法。推导决策边界方程，并说明其是否为线性边界。假设 $\Sigma$ 可逆且 $\mathbf M_0\ne\mathbf M_1$。

3. 考虑用内积 $\mathbf W\cdot\mathbf X$ 的标准 sigmoid 函数建模后验概率 $p(y=1\mid\mathbf X)$，其中 $\mathbf W$ 是权重参数向量。推导类别 0 与类别 1 后验概率之比的对数，并说明它是否为线性函数。

4. 在第 3 问的方法中，以类别 0、1 后验概率的二元交叉熵定义损失函数。写出推导过程，求该损失关于权重参数 $\mathbf W$ 的梯度。

5. 说明如何把第 3、4 问的方法扩展到多分类问题。具体给出类别 $i$ 的后验概率函数、损失函数，以及损失对权重参数的梯度；本问无需写推导过程。

6. 简要说明如何把第 5 问的方法扩展为多层前馈神经网络。具体给出各层使用的激活函数和损失函数，并说明计算各权重参数梯度的方法。

## **Kai**

### Q.1

边界满足 $\|\mathbf X-\mathbf P_0\|^2=\|\mathbf X-\mathbf P_1\|^2$。展开并消去 $\mathbf X^{\mathrm T}\mathbf X$，得到

$$2(\mathbf P_1-\mathbf P_0)^{\mathrm T}\mathbf X=\|\mathbf P_1\|^2-\|\mathbf P_0\|^2.$$

因 $\mathbf P_0\ne\mathbf P_1$，这是一个仿射超平面，故为线性决策边界。

### Q.2

两个高斯密度的行列式因子相同，故比较似然等价于比较 Mahalanobis 距离。令两似然相等，得到

$$(\mathbf X-\mathbf M_0)^{\mathrm T}\Sigma^{-1}(\mathbf X-\mathbf M_0)=(\mathbf X-\mathbf M_1)^{\mathrm T}\Sigma^{-1}(\mathbf X-\mathbf M_1).$$

展开后为

$$2(\mathbf M_1-\mathbf M_0)^{\mathrm T}\Sigma^{-1}\mathbf X=\mathbf M_1^{\mathrm T}\Sigma^{-1}\mathbf M_1-\mathbf M_0^{\mathrm T}\Sigma^{-1}\mathbf M_0.$$

可逆协方差矩阵为正定矩阵，且两个均值不同，因此该边界也是仿射超平面。

### Q.3

记 $z=\mathbf W\cdot\mathbf X$、$p=\sigma(z)=1/(1+e^{-z})$。则

$$\log\frac{p(y=0\mid\mathbf X)}{p(y=1\mid\mathbf X)}=\log\frac{1-p}{p}=-z=-\mathbf W\cdot\mathbf X,$$

是 $\mathbf X$ 的线性函数。

### Q.4

单个样本标签为 $y\in\{0,1\}$ 时，二元交叉熵为

$$\ell=-y\log p-(1-y)\log(1-p).$$

利用 $\sigma'(z)=p(1-p)$，

$$\frac{\partial\ell}{\partial z}=\left(-\frac yp+\frac{1-y}{1-p}\right)p(1-p)=p-y,$$

所以 $\nabla_{\mathbf W}\ell=(p-y)\mathbf X$。多个样本的平均损失取上述梯度的样本平均。

### Q.5

设有 $K$ 类，$y_i$ 是 one-hot 标签，使用 softmax：

$$p_i=\frac{e^{\mathbf W_i\cdot\mathbf X}}{\sum_{j=1}^K e^{\mathbf W_j\cdot\mathbf X}},\qquad \ell=-\sum_{i=1}^K y_i\log p_i.$$

其梯度为 $\nabla_{\mathbf W_i}\ell=(p_i-y_i)\mathbf X$。

### Q.6

令 $\mathbf h^{(0)}=\mathbf X$，隐藏层取

$$\mathbf z^{(l)}=W^{(l)}\mathbf h^{(l-1)}+\mathbf b^{(l)},\qquad \mathbf h^{(l)}=\operatorname{ReLU}(\mathbf z^{(l)}),$$

其中 $\operatorname{ReLU}(z)=\max(0,z)$ 按元素作用。输出层对 logits $\mathbf z^{(L)}$ 使用 softmax，损失仍取多类交叉熵。反向传播按链式法则计算

$$\boldsymbol\delta^{(L)}=\mathbf p-\mathbf y,\qquad \boldsymbol\delta^{(l)}=\bigl((W^{(l+1)})^{\mathrm T}\boldsymbol\delta^{(l+1)}\bigr)\odot\operatorname{ReLU}'(\mathbf z^{(l)}),$$

$$\frac{\partial\ell}{\partial W^{(l)}}=\boldsymbol\delta^{(l)}(\mathbf h^{(l-1)})^{\mathrm T},\qquad \frac{\partial\ell}{\partial\mathbf b^{(l)}}=\boldsymbol\delta^{(l)}.$$

在 ReLU 的零点可约定使用次梯度 $0$。随后以梯度下降等方法更新参数。

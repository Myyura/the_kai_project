---
sidebar_label: 2017年8月実施 専門科目II 問題5
tags:
  - Tokyo-University
  - Operations-Research.Convex-Optimization.One-Norm-Minimization
  - Operations-Research.Convex-Optimization.Convex-First-Order-Optimality
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2017年8月実施 専門科目II 問題5

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

对 $\boldsymbol w\in\mathbb R^d$，定义
$\|\boldsymbol w\|_1=\sum_i|w_i|$、$\|\boldsymbol w\|_2=(\sum_iw_i^2)^{1/2}$。若对所有 $\boldsymbol z$ 都有

$$
f(\boldsymbol z)\ge f(\boldsymbol x)+\boldsymbol g^{\mathsf T}(\boldsymbol z-\boldsymbol x),
$$

则称 $\boldsymbol g$ 是凸函数 $f$ 在 $\boldsymbol x$ 处的次梯度；其集合记为
$\partial f(\boldsymbol x)$。可以使用以下事实：可微凸函数的次梯度唯一且等于梯度；
$\partial(f_1+f_2)$ 是两个次梯度集合的 Minkowski 和；$0\in\partial f(\boldsymbol w^*)$ 是 $\boldsymbol w^*$ 最小化 $f$ 的充要条件。

（1）求（a）$f(w)=|w|$ 的 $\partial f(w)$；（b）$f(\boldsymbol w)=\|\boldsymbol w\|_1$ 的 $\partial f(\boldsymbol w)$。

（2）对 $f(w)=\frac12(w-z)^2+\beta|w|$（$z\in\mathbb R,\beta>0$），求
$\partial f(w)$ 及最小点 $w^*$。

（3）对 $f(\boldsymbol w)=\frac12\|\boldsymbol w-\boldsymbol z\|_2^2+
\beta\|\boldsymbol w\|_1$，求 $\partial f(\boldsymbol w)$；若 $\boldsymbol w^*$ 为最小点，给出 $w_j^*=0$ 的充要条件。

现用带 $\ell_1$ 正则的最小二乘训练线性模型，其中 $\lambda>0$：

$$
L(\boldsymbol w)=\frac1{2n}\sum_{i=1}^n(y_i-\boldsymbol w^{\mathsf T}\boldsymbol x_i)^2,
\qquad
\boldsymbol w^*=\arg\min_{\boldsymbol w}\{L(\boldsymbol w)+\lambda\|\boldsymbol w\|_1\}.
$$

从 $\boldsymbol w^{(0)}$ 出发，取步长 $\eta_t>0$，迭代算法为

$$
\boldsymbol w^{(t+1)}=\arg\min_{\boldsymbol w}
\left\{
\nabla L(\boldsymbol w^{(t)})^{\mathsf T}(\boldsymbol w-\boldsymbol w^{(t)})
+\lambda\|\boldsymbol w\|_1
+\frac1{2\eta_t}\|\boldsymbol w-\boldsymbol w^{(t)}\|_2^2
\right\}.
$$

（4）求 $\alpha$，使

$$
w_j^{(t)}-\eta_t\frac{\partial L}{\partial w_j}(\boldsymbol w^{(t)})
\in[-\alpha,\alpha]
$$

成为 $w_j^{(t+1)}=0$ 的充要条件。

## **Kai**

### （1）

$$
\partial|w|=
\begin{cases}
\{-1\},&w<0,\\
[-1,1],&w=0,\\
\{1\},&w>0.
\end{cases}
$$

并且

$$
\partial\|\boldsymbol w\|_1
=\{\boldsymbol g\in\mathbb R^d\mid g_i\in\partial|w_i|\ (i=1,\ldots,d)\}.
$$

### （2）

$$
\partial f(w)=w-z+\beta\,\partial|w|.
$$

由 $0\in\partial f(w^*)$，得软阈值解

$$
w^*=\operatorname{sgn}(z)(|z|-\beta)_+
=\begin{cases}
z-\beta,&z>\beta,\\
0,&|z|\le\beta,\\
z+\beta,&z<-\beta.
\end{cases}
$$

### （3）

$$
\partial f(\boldsymbol w)
=\boldsymbol w-\boldsymbol z+\beta\,\partial\|\boldsymbol w\|_1.
$$

各坐标相互独立，故

$$
w_j^*=0\quad\Longleftrightarrow\quad |z_j|\le\beta.
$$

### （4）

令

$$
q_j=w_j^{(t)}-\eta_t\frac{\partial L}{\partial w_j}(\boldsymbol w^{(t)}).
$$

配方后，每个坐标的子问题是
$\frac1{2\eta_t}(w_j-q_j)^2+\lambda|w_j|$，由（2）知

$$
w_j^{(t+1)}=0
\Longleftrightarrow |q_j|\le\eta_t\lambda.
$$

因此 $\boxed{\alpha=\eta_t\lambda}$。

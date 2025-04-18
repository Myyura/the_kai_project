---
sidebar_label: "2022年8月実施 専門科目 S-3"
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2022年8月実施 専門科目 S-3

## **Author**
祭音Myyura

## **Description**
### 設問1
Let us consider a fully-connected feed-forward neural network that has an input of $d$ dimensions, an output of $c$ classes, and $m$ intermediate layers, each having $n$ nodes.
A sigmoid function is used in all nodes including output nodes.
A weight between node $i$ and node $j$ is denoted as $w_{ij}$, and there are no bias terms.

(1) Draw this network and specify $d$, $c$, $m$, and $n$. Answer the total number of the network weights.

(2) Show the output $g_k$ of an output node (indexed with $k$) using the output $g_j$ of the nodes of the preceding layer (indexed with $j$).

(3) Consider the problem of detecting the source(s) from music recording composed of the sounds of one or more from violin, flute, piano, and singing voices.
Describe how the training label $t_k$ will be given for the output nodes (indexed with $k$).
Explain why it is not appropriate to use a softmax function in the output nodes for this problem.

(4) Show the binary cross-entropy of the output $g_k$ and the training label $t_k$ of an output node (indexed with $k$).

(5) Show the formula to update the weight $w_{jk}$ of an output node (indexed with $k$) and a node of the preceding layer (indexed with $j$) based on the gradient descent method with the objective function of the sum of the binary cross-entropy defined above over all classes.
Show how you derive the formula.

(6) Show the formula to update the weight $w_{ij}$ of the nodes (indexed with $j$ and $i$), both of which are not in the output layer, based on the error back-propagation method. You do not have to show how you derive it.

(7) Explain why it is difficult to update the weights effectively as the number of network layers becomes large. Describe the methods to mitigate this problem.

### 設問2
Let us consider $n$ training samples of a $d$-dimensional vector $X = (x_1, \dots, x_d)^T$, with their mean vector and covariance matrix denoted as $M = (m_1, \dots, m_d)^T$ and $\Sigma$, respectively, where $T$ denotes the transpose.

(1) Show the formula to compute the component $\sigma_{ij}$ of the covariance matrix $\Sigma$.

(2) Show the formula of the Mahalanobis distance between a sample $X$ and this training sample distribution.

(3) In neural network training, we often conduct normalization of inputs so that the distribution for each dimension has a mean of $0$ and a variance of $1$.
Let $X$ and $Z$ be an original input and its normalized one. 
Discuss the relationship between the square root of the sum of the squared values in each dimension of $Z$, which is regarded as the Euclidean norm $\|Z\|_2$, and the above Mahalanobis distance.

## **Kai**
### 設問1
#### (1)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist_202208_senmon_s_3_p1.png" width="400" alt=""/>
</figure>

the total number of the network weights is

$$
dn+(m-1)n^{2}+nc
$$

#### (2)
the output $g_k$ is

$$
g_{k} = \sigma\left(\sum_{j=1}^{n}w_{jk}g_{j}\right)
$$

where $\sigma$ is the sigmoid function.

#### (3)
The classification classes consist of four categories: violin, flute, piano, and vocals, thus $c = 4$.
Let $k = 1, \dots, c$, and construct the training label $t_k$ such that it equals $1$ if a particular source $k$ is present in the music recording, and $0$ otherwise.
Using the softmax function in the output layer is inappropriate in this context because it would force the neural network to solve a four-class classification problem, making it unable to represent cases containing multiple sources.

#### (4)

$$
L_k = -t_{k}\log g_{k}-(1-t_{k})\log (1-g_{k})
$$

#### (5)
Let $h_{j} = \sum_{i=1}^{n}w_{ij}g_{i}$. The loss function $L$ is defined as follows:

$$
L = \sum_{k=1}^{c}L_{k} = \sum_{k=1}^{c}\left(-t_{k}\log g_{k}-(1-t_{k})\log (1-g_{k})\right)
$$

the weight $w_{jk}$ is updated as follows:

$$
w_{jk} \leftarrow w_{jk} - \eta\frac{\partial L}{\partial w_{jk}}
$$

where $\eta$ is learning rate. Since

$$
\begin{aligned}
\frac{\partial L}{\partial w_{jk}}
&= \frac{\partial L}{\partial g_{k}}\cdot\frac{\partial g_{k}}{\partial h_{k}}\cdot \frac{\partial h_{k}}{\partial w_{jk}}\\
&= \frac{\partial L}{\partial g_{k}}\cdot \sigma^{\prime}(h_{k})\cdot g_{j}\\
&= \left(-\frac{t_{k}}{g_{k}}+\frac{1-t_{k}}{1-g_{k}}\right)\cdot\sigma^{\prime}(h_{k})\cdot g_{j}\\
&= \frac{g_{k}-t_{k}}{g_{k}(1-g_{k})}\cdot\sigma^{\prime}(h_{k})\cdot g_{j}\\
&= \frac{\sigma(h_{k})-t_{k}}{\sigma(h_{k})(1-\sigma(h_{k}))}\cdot\sigma^{\prime}(h_{k})\cdot g_{j}
\end{aligned}
$$

$$
\begin{aligned}
\sigma^{\prime}(x) &= \frac{e^{-x}}{(1+e^{-x})^{2}}
= \frac{e^{-x}}{1+e^{-x}}\cdot \frac{1}{1+e^{-x}}\\
&= \left(1-\frac{1}{1+e^{-x}}\right)\frac{1}{1+e^{-x}} \\
&= \sigma(x)(1-\sigma(x))
\end{aligned}
$$

we have

$$
\frac{\partial L}{\partial w_{jk}}
= (\sigma(h_{k})-t_{k})g_{j} = \left(\sigma\left(\sum_{j=1}^{n}w_{jk}g_{j}\right)-t_{k}\right)g_{j}
$$

$$
w_{jk} \leftarrow w_{jk} - \eta \left(\sigma\left(\sum_{j=1}^{n}w_{jk}g_{j}\right)-t_{k}\right)g_{j}
$$

#### (6)

$$
\begin{align}
w_{ij} &\leftarrow w_{ij} - \eta \left(\sum_{k=1}^{n}\frac{\partial L}{\partial h_k}w_{jk}\right)\sigma^{\prime}(h_{j})g_{i}
\end{align}
$$

#### (7)
Vanishing and exploding gradients.

Methods to mitigate the above issue:
- Weight Initialization
  - Xavier Initialization
  - He Initialization
- Activation Functions
  - ReLU (Rectified Linear Unit)
- Batch Normalization
- Gradient Clipping


### 設問2
#### (1)

$$
\begin{aligned}
\sigma_{ij} &= \text{Cov}[X_{i},X_{j}]\\
&= E[X_{i}X_{j}] - E[X_{i}]E[X_{j}]\\
&= E[X_{i}X_{j}] - m_{i}m_{j}
\end{aligned}
$$

where $X_i, X_j$ denote the $i$-th and $j$-th training sample.

#### (2)

$$
\sqrt{(X-M)^{T}\Sigma^{-1}(X-M)}
$$

#### (3)
When input $X$ is normalized, if the covariance matrix $\Sigma$ is a diagonal matrix, the Mahalanobis distance and the Euclidean distance are equivalent.

Suppose that

$$
Z = A^{-1}(X-M)
$$

since $Z$ is obtained by normalizing $X$, when $\Sigma$ is diagonal, the covariance matrix of $Z$ is identity matrix. Hence

$$
\begin{aligned}
\Sigma &= E[(X-M)(X-M)^{T}]\\
&= E\left[(AZ)(AZ)^{T}\right]\\
&= E\left[AZZ^{T}A^{T}\right]\\
&= AE[ZZ^{T}]A^{T}\\
&= AA^{T}
\end{aligned}
$$

and the Mahalanobis distance is

$$
\begin{aligned}
\sqrt{(X-M)^{T}\Sigma^{-1}(X-M)} &= \sqrt{Z^{T}A^{T}(AA^{T})^{-1}AZ}\\
&= \sqrt{Z^{T}A^{T}(A^{T})^{-1}A^{-1}AZ}\\
&= \sqrt{Z^{T}Z} = \|Z\|
\end{aligned}
$$

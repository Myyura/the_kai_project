---
sidebar_label: 2017年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Data-Science-Artificial-Intelligence.Machine-Learning.Decision-Tree
  - Computer-Science.Dynamic-Programming.Decision-Tree-Pruning
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2017年8月実施 筆記試験 第1問

## **Author**
[tomfluff](https://github.com/tomfluff), 祭音Myyura, [itsuitsuki](https://github.com/itsuitsuki)

## **Description**
A data set $S$ including eight data is given as in Figure 1. Each datum is in the form of  $(x_1, x_2, x_3, x_4, y) \in \{0, 1\}^5$. 
Below we consider how to construct a rule from $S$ for classifying $\boldsymbol{x} = (x_1, x_2, x_3, x_4)$ into $y = 1$ or $y = 0$. Answer the following questions.

#### Figure 1: Data set
| $t$ | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $y$ |
|--------|---------|---------|---------|---------|-------|
| 1      | 1       | 0       | 0       | 1       | 1     |
| 2      | 1       | 1       | 0       | 0       | 1     |
| 3      | 1       | 0       | 1       | 1       | 1     |
| 4      | 0       | 1       | 1       | 0       | 1     |
| 5      | 0       | 0       | 1       | 1       | 0     |
| 6      | 0       | 0       | 1       | 0       | 0     |
| 7      | 0       | 0       | 0       | 1       | 0     |
| 8      | 1       | 1       | 1       | 0       | 0     |

(1) Let us consider the code-length required for encoding a binary string $z = z_1, \dots, z_n$ of length $n$ ($z_i \in \{0, 1\}, i = 1, \dots, n$).
In general, for a finite set $G$, the code-length required for encoding one element $g \in G$ is given by $\log |G|$ (bit), where the logarithm is to the base 2.
Show that, for a binary string $z$ of length $n$ in which the number of occurrences of $1$ is $k$, the code-length required for encoding $z$ and $k$ itself is at most:

$$
\begin{align}
\log(n + 1) + \log \ _nC_k \text{ (bit),} \tag{1}
\end{align}
$$

where the value of the number $n$ is given in advance and the code-length can be non-integer valued.

Below the value of Eq.(1) for $z$ is denoted as $L(z)$.

(2) Let the probability of $y = 1$ for a datum with $x_1 = 1$ be $\theta$. Then calculate the least squares estimate of $\theta$ from Figure 1.
The least squares estimate of $\theta$ is the value of $\theta$ that minimizes $\sum_{t:x_1=1} (y(t) - \theta)^2$ where $y(t)$ denotes the value of $y$ for the $t$-th datum and $\sum_{t:x_1=1}$ denotes the sum taken over all the data such that $x_1 = 1$.

(3) Let $y$ be a binary string obtained by concatenating the values of $y$ for all the data in $S$ in Figure 1.
Let $y^{(i)}_1$ be a binary string obtained by concatenating the values of $y$ for all the data in $S$ such that $x_i = 1$ and let $y^{(i)}_0$ be a binary string obtained by concatenating the values of $y$ for all the data in $S$ such that $x_i = 0$ ($i = 1, 2, 3, 4$).
For example, the indexes of data in $S$ such that $x_1 = 1$ are $1$, $2$, $3$, $8$, so the binary string obtained by concatenating the values of $y$ corresponding to them is $y^{(1)}_1 = 1110$.
We define the measure of goodness of classifying data by partitioning $S$ based on whether $x_i = 1$ or $x_i = 0$ as follows:

$$
\begin{align}
\Delta(i|y) \overset{\text{def}}{=} L(y^{(i)}_1) + L(y^{(i)}_0) \quad (i = 1, 2, 3, 4). \tag{2}
\end{align}
$$

We consider that the smaller the value of Eq.(2) is, the more the value of $x_i$ contributes to the classification of $y$.
Find $i$ that minimizes $\Delta(i|y)$.
Hereinafter, when there are more than one $x_i$’s that minimize the value of Eq.(2), one is chosen randomly from among them.

(4) Let the value of $i$ obtained in Question (3) be $i^*$. $S$ is partitioned into two sets according to whether $x_{i^*} = 1$ or $x_{i^*} = 0$, then $y$ is also partitioned into two strings: $y^{(i^*)}_1$ and $y^{(i^*)}_0$.
It can be represented using a tree structure as shown in Figure 2. 
We call it a partitioning tree.
We call $y^{(i^*)}_1$ and $y^{(i^*)}_0$ partitioned strings.
We further partition each of $y^{(i^*)}_1$ and $y^{(i^*)}_0$, by finding $i \ (\neq i^*)$ minimizing $\Delta(i|y^{(i^*)}_1)$ and minimizing $\Delta(i|y^{(i^*)}_0)$, respectively. Let this partitioning of a leaf be repeated until the following stopping rule is fulfilled: The depth of a leaf (the number of partitionings from the root to the leaf) is two, or the partitioned string arriving at a leaf is all $y = 1$ or all $y = 0$.
Find the partitioning tree that is finally obtained.

(5) For the resulting partitioning tree, for a partitioned string arriving at each leaf, we assign $y = 1$ to the leaf if the number of occurrences of $y = 1$ in this string is larger than that of $y = 0$, and assign $y = 0$ to the leaf if the number of occurrences of $y = 1$ is smaller than that of $y = 0$.
When the number of occurrences of $y = 1$ is the same as that of $y = 0$, we assign randomly $y = 1$ or $y = 0$ to the leaf.
This tree can be used for predicting the value of $y$ for any new datum.
That is, when $(x_1, x_2, x_3, x_4)$ in the new datum is given  
and arrives at a leaf, the tree predicts the value of its corresponding $y$ as the value of $y$ assigned to the leaf.
Here, even if we change the stopping rule in Question (4) to construct a larger tree from a training data set $S$ so that the values of $y$ for data reaching at each leaf are all $y = 1$ or all $y = 0$, such a tree doesn’t necessarily predict the value of $y$ for a new datum with higher accuracy. Explain the reason.

(6) Consider a general case where for a positive integer $d \geq 2$, a set $S$ of multi-dimensional data in the form of $(x_1, \dots, x_d, y) \in \{0, 1\}^{d+1}$ and a partitioning tree $\mathcal{T}$ are given.
Let $\mathcal{M}$ be a set of all subtrees which share the root of $\mathcal{T}$ and are obtained by pruning $\mathcal{T}$ starting  
from its leaves.
We define the following penalized criterion for evaluating the goodness of a subtree $M \in \mathcal{M}$ for the given $S$:

$$
\begin{align}
N_L(M) C_L + N_I(M) C_I + \sum_u L(y_u), \tag{3}
\end{align}
$$

where $N_L(M)$ is the total number of leaves in $M$ and $N_I(M)$ is the total number of inner nodes in $M$.
$C_L$ and $C_I$ are given positive constants.
The sum in the third term in Eq.(3) is taken over all the leaves $\{u\}$ in $M$ and $y_u$ is the binary string obtained by concatenating the values of $y$ for all the data which reach the leaf $u$.
The smaller the value of Eq.(3) is, the better $M$ is.
Give an algorithm that finds $M$ minimizing the criterion Eq.(3) from $\mathcal{M}$ and $S$, and runs as efficiently as possible in computation time.

### 题目描述

给定含 8 条数据的数据集 \(S\)，每条为 \((x_1,x_2,x_3,x_4,y)\in\{0,1\}^5\)，目标是学习把 \(\boldsymbol x=(x_1,x_2,x_3,x_4)\) 分类为 \(y=0\) 或 \(1\) 的规则：

| \(t\) | \(x_1\) | \(x_2\) | \(x_3\) | \(x_4\) | \(y\) |
|---:|---:|---:|---:|---:|---:|
| 1 | 1 | 0 | 0 | 1 | 1 |
| 2 | 1 | 1 | 0 | 0 | 1 |
| 3 | 1 | 0 | 1 | 1 | 1 |
| 4 | 0 | 1 | 1 | 0 | 1 |
| 5 | 0 | 0 | 1 | 1 | 0 |
| 6 | 0 | 0 | 1 | 0 | 0 |
| 7 | 0 | 0 | 0 | 1 | 0 |
| 8 | 1 | 1 | 1 | 0 | 0 |

1. 对长度为 \(n\) 的二进制串 \(z=z_1,\ldots,z_n\)，一般从有限集合 \(G\) 编码一个元素需 \(\log_2|G|\) 比特。若 \(z\) 中有 \(k\) 个 1，证明在 \(n\) 已知且码长可非整数时，编码 \(z\) 连同 \(k\) 所需码长至多为
   \[
   \log(n+1)+\log {n\choose k}. \tag{1}
   \]
   以后把式 (1) 的值记为 \(L(z)\)。
2. 设在 \(x_1=1\) 的数据中 \(y=1\) 的概率为 \(\theta\)。由表中数据求使
   \[
   \sum_{t:x_1=1}(y(t)-\theta)^2
   \]
   最小的 \(\theta\)。
3. 把 \(S\) 中所有 \(y\) 依次连接为二进制串 \(y\)。对 \(i=1,2,3,4\)，分别把满足 \(x_i=1\) 与 \(x_i=0\) 的数据之 \(y\) 连接为 \(y_1^{(i)},y_0^{(i)}\)；例如 \(x_1=1\) 的数据编号是 1、2、3、8，所以 \(y_1^{(1)}=1110\)。定义按 \(x_i\) 划分的指标
   \[
   \Delta(i\mid y)=L(y_1^{(i)})+L(y_0^{(i)}). \tag{2}
   \]
   指标越小，认为 \(x_i\) 对分类贡献越大。求使其最小的 \(i\)；如有并列，随机选一个。
4. 记第 3 问结果为 \(i^*\)，按 \(x_{i^*}\) 把 \(S\) 及 \(y\) 分成两支，形成原文图 2 的划分树。对每个叶中的串，再从 \(i\ne i^*\) 中选择使相应 \(\Delta\) 最小的特征继续划分。反复执行，直到叶深度（从根起的划分次数）达到 2，或到达叶的 \(y\) 串全为 1 或全为 0。画最终划分树。
5. 对每个叶，若其串中 1 多于 0 就赋标签 1，少于则赋 0，相等时随机赋 0 或 1；新样本按特征走到叶后预测该标签。解释为何把停止规则改为继续扩树、直到训练数据每个叶都纯为 0 或纯为 1，并不一定提高新数据预测精度。
6. 一般地，\(S\) 中数据为 \((x_1,\ldots,x_d,y)\in\{0,1\}^{d+1}\)，\(d\ge2\)，给定划分树 \(\mathcal T\)。令 \(\mathcal M\) 为从叶向上剪枝得到且与 \(\mathcal T\) 共根的所有子树。对子树 \(M\) 定义
   \[
   N_L(M)C_L+N_I(M)C_I+\sum_uL(y_u), \tag{3}
   \]
   其中 \(N_L,N_I\) 分别为叶数、内部结点数，\(C_L,C_I>0\) 已知；和遍历所有叶 \(u\)，\(y_u\) 是到达该叶的数据标签串。值越小越好。给出尽可能高效地从 \(\mathcal M\) 中求式 (3) 最小子树的算法。

#### 考点

- **决策树划分准则**：用组合编码长度评价二元特征划分，并按最小描述长度递归建树。
- **最小二乘概率估计**：对二元标签常数模型求平方损失最小的样本均值。
- **过拟合**：解释训练叶完全纯化会增大模型复杂度、拟合噪声而损害泛化。
- **决策树动态规划剪枝**：自底向上比较保留内部结点与把整棵子树剪成叶的代价，在线性于树规模的时间内求最优子树。

## **Kai**
### (1) - By Myyura
The notation $_nC_k$ usually represents "n choose k".

For a fixed $n$ and $k$, the total number of possible binary strings that satisfy these conditions is given by the binomial coefficient $\binom{n}{k}$, i.e. $_nC_k$.

To uniquely identify any of these strings, we need a code of length:

$$
\log \binom{n}{k}
$$

The length $n$ should be included as part of the encoded message, hence the total encoding length is:

$$
\log(n + 1) + \log \binom{n}{k} \text{ (bit),} \tag{1}
$$

### (2) - By tomfluff
Let us fine a $\theta$ such that the least squares is minimized. Let us denote least squares as $f(\theta )$.

$$
f(\theta )=\sum_{t:x_1=1}(y(t) - \theta )^2
$$

$$
f(\theta )=(1 - \theta )^2+(1 - \theta )^2+(1 - \theta )^2+(0 - \theta )^2
$$

$$
f(\theta )=3(1 - \theta )^2+(- \theta )^2
$$

$$
f'(\theta )=-6+6\theta +2\theta = 0
$$

$$
\Rightarrow 8\theta = 6 \Rightarrow \theta=\frac{3}{4}
$$

Therefore, when $\theta = \frac{3}{4}$ the least squares function is minimized.

### (3) - By itsuitsuki
+ $\Delta(1|y)=4+2\log 5$
+ $\Delta(2|y)=4+\log 5+2\log 3$
+ $\Delta(3|y)=4+\log 5+2\log 3$
+ $\Delta(4|y)=2+2\log 5+2\log 3$
Hence $i=1$ minimizes $\Delta(i|y)$.

### (4) - By tomfluff
<u>Note:</u> Any mistakes here are derived from the issues with `(1)` mentioned before.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201708_1_p1.png" width="281" height="222" alt=""/>
</figure>

### (5)
In machine learning there are the concepts of bias and variance. The bias indicates how much the generated prediction function fits the relationships between the data and the prediction. And variance indicates how much the prediction function fits "new" data (testing data). When the prediction function fits the training data too well it is called **"over fitting"** and over fitting leads to low bias but high variance. In the mentioned case, extending the tree would result in over fitting the prediction function to the data set. Meaning that on new data the variance will be large and it will not improve the overall prediction.

### (6) - by Gemini
The algorithm will work as **Cost-Complexity Pruning**. Tomfluff (the previous solution provider in this problem) misrecognizes this as a Minimum Error Pruning technique which is different. Similar pruning algorithms include PEP (Pessimistic Error Pruning), etc.

The algorithm is dynamic programming:
1. Post-order traverse every node; 
2. For each internal node $u$, we can choose to 
   1. Prune the node into a leaf with contribution to criterion $\text{Cost}_{\text{prune}}(u) = C_L + L(\text{all data under }u)$
   2. Keep the subtree rooted at $u$ with contribution $\text{Cost}_{\text{keep}}(u) = C_I + \sum_{v\in \text{children}(u)} \text{Cost}_{\min}(u)
3. Choose a minimum-contribution action with $\text{Cost}_{\min}(u) = \min(\text{Cost}_{\text{prune}}(u), \text{Cost}_{\text{keep}}(u))$. When pruning, mark this subtree rooted at $u$ as a leaf.

Since in this DP, all nodes are traversed and computed for at once, the time complexity is $O(|\mathcal T|)$.

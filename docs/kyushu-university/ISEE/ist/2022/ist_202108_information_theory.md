---
sidebar_label: "2021年8月実施 情報理論"
tags:
  - Kyushu-University
  - Computer-Science.Information-Theory.Channel-Capacity
  - Probability-Statistics.Stochastic-Processes.Markov-Information-Source
  - Computer-Science.Information-Theory.Entropy-Rate
  - Computer-Science.Information-Theory.Huffman-Coding
---
# 九州大学 システム情報科学府 情報理工学専攻 2021年8月実施 情報理論

## **Author**
[Yu](https://blog.loveyou.moe/KU/%E4%B9%9D%E5%A4%A7%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%81%8E%E5%8E%BB%E5%95%8F%E3%81%AE%E8%A7%A3%E7%AD%94/)

## **Description**
### 【問 1】
$k$ を正の整数とする。入力アルファベットが $\mathcal{X} = \{0,1\}^k$ , 出力アルファベットふぁ $\mathcal{Y} = \{0,1\}^k$ の無記憶な通信路 $W(Y|X)$ を

$$
W(Y|X) = 
\left\{
\begin{aligned}
&0 \quad (d(X,Y) = 0)\\
&\frac{1}{k} \quad (d(X,Y) = 1)\\
&0 \quad (d(X,Y) \ge 2)
\end{aligned}
\right.
$$

で定める。ただし, $d(X,Y)$は, $X = (X_1,X_2,\cdots,X_k)$ と $Y = (Y_1,Y_2,\cdots,Y_k)$ の問のハミング距離

$$
d(X,Y) = \sum_{i = 1}^k |X_i - Y_i|
$$

を表す。この通信路の通信路容量を求めよ。

### 【問 2】
アルファベットが $\{1,2,3,4\}$ である単純マルコフ情報源の遷移確率行列が

$$
\begin{pmatrix}
0.5 & 0.5 & 0 & 0 \\
0 & 0.5 & 0 & 0.5 \\
0.5 & 0.5 & 0 & 0 \\
0 & 0 & \gamma & 1- \gamma \\
\end{pmatrix}
$$

で与えられたとする。ここで, $(i,j)$ 成分は遷移確率 $P(j|i)$ を表し, $0 < \gamma < 1$ とする。以下の問いに答えよ。

(1) このマルコフ情報源の状態遷移図を図示せよ。

(2) このマルコフ情報源の定常確率分布が $(1/8,1/4,1/8,1/2)$ であるとき, $\gamma$ の値を求めよ。

(3) $\gamma$ が前問で求めた値をとるとき, このマルコフ情報源のエントロピーレートを求めよ。

(4) このマルコフ情報源に従う確率変数の列 $X_1,X_2,\dots$ を考える。 $X_1$ が上記の定常確率分布 $(1/8,1/4,1/8,1/2)$ に従う場合, $(X_1,X_2)$ に対するハフマン符号化を行い, その符号の木を図示せよ。ただし, 符号語のアルファベットは $\{0,1\}$ とする。

### 题目描述

【问题 1】设 $k$ 为正整数。定义输入、输出字母表均为
$\mathcal X=\mathcal Y=\{0,1\}^k$ 的无记忆信道 $W(Y\mid X)$：

$$
W(Y\mid X)=
\begin{cases}
0,&d(X,Y)=0,\\
\frac1k,&d(X,Y)=1,\\
0,&d(X,Y)\ge2,
\end{cases}
$$

其中 $X=(X_1,\ldots,X_k)$ 与 $Y=(Y_1,\ldots,Y_k)$ 间的 Hamming 距离为

$$
d(X,Y)=\sum_{i=1}^k|X_i-Y_i|.
$$

求该信道的信道容量。

【问题 2】某一阶 Markov 信源的字母表为 $\{1,2,3,4\}$，转移概率矩阵为

$$
\begin{pmatrix}
0.5&0.5&0&0\\
0&0.5&0&0.5\\
0.5&0.5&0&0\\
0&0&\gamma&1-\gamma
\end{pmatrix},
$$

其中第 $(i,j)$ 个元素表示 $P(j\mid i)$，且 $0<\gamma<1$。回答：

1. 画出该 Markov 信源的状态转移图。
2. 已知其平稳概率分布为
   $(\frac18,\frac14,\frac18,\frac12)$，求 $\gamma$。
3. 当 $\gamma$ 取上一问的值时，求该 Markov 信源的熵率。
4. 令随机变量序列 $X_1,X_2,\ldots$ 服从该 Markov 信源，且
   $X_1$ 服从上述平稳分布。对二元组 $(X_1,X_2)$ 进行二元 Huffman 编码，并画出码树；码字符号表为 $\{0,1\}$。

#### 考点

- **对称无记忆信道容量**：利用按汉明距离定义的转移对称性，计算条件熵并确定最大输出熵。
- **马尔可夫信源状态图与平稳分布**：从转移矩阵画图，并用平稳方程反求参数 $\gamma$。
- **马尔可夫信源熵率**：按平稳状态概率加权各状态的转移熵。
- **二元组哈夫曼编码**：由平稳分布和转移概率求 $(X_1,X_2)$ 的联合分布，再建立二元最优前缀码树。

## **Kai**
### 【問 1】

$$
C = \log_2s + \sum_{j = 1}^sp_{1j}\log_2p_{1j} = k + k \cdot \frac{1}{k}\log\frac{1}{k} = k - \log_2k
$$

### 【問 2】
#### (1)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_information_theory_p1.png" width="500" alt=""/>
</figure>

#### (2)

$$
w = (\frac{1}{8},\frac{1}{4},\frac{1}{8},\frac{1}{2})
$$

$$
\Pi = 
\begin{bmatrix}
0.5 & 0.5 & 0 & 0 \\
0 & 0.5 & 0 & 0.5 \\
0.5 & 0.5 & 0 & 0 \\
0 & 0 & \gamma & 1- \gamma
\end{bmatrix}
$$

$$
w\Pi=w \Rightarrow \lambda = 0.25 
$$

#### (3)

$$
\begin{aligned}
H(S_1) &= \mathcal{H}(0.5) = 1\\
H(S_2) &= \mathcal{H}(0.5) = 1\\
H(S_3) &= \mathcal{H}(0.5) = 1\\
H(S_4) &=\mathcal{H}(0.25) = 2 - \frac{3}{4}\log_2 3\\
H(S) &= \frac{1}{8}H(S_1) + \frac{1}{4}H(S_2) + \frac{1}{8}H(S_3) + \frac{1}{2}H(S_4) = \frac{3}{2} - \frac{3}{8}\log_2 3
\end{aligned}
$$

#### (4)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_information_theory_p2.png" width="500" alt=""/>
</figure>

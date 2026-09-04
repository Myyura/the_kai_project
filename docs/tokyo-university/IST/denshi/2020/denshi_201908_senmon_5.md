---
sidebar_label: "2019年8月実施 専門 第5問"
tags:
  - Tokyo-University
  - Electrical-Electronic.Signal-Processing.Scalar-Quantizer-Probability-and-Centroid-Reconstruction
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Huffman-Coding
  - Electrical-Electronic.Signal-Processing.Maximum-Entropy-Quantizer-Boundaries
---

# 東京大学 情報理工学系研究科 電子情報学専攻 2019年8月実施 専門 第5問

## **Author**

[diohabara](https://github.com/diohabara/open_inshi), [adj-matrix](https://github.com/adj-matrix), 祭音Myyura

## **Description**

離散時間信号 $x$ の出力が、図のような確率密度関数 $p(x)$ に従うとする。以下の問いに答えよ。$\log_2 3=1.58,\ \log_2 5=2.32$ とする。

![確率密度 p(x) は区間 [-1,1] で p(x)=1-|x|、それ以外では 0。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo-university/IST/denshi/q5_2020_density.svg)

(1) 量子化器 $Q_0$ は、信号 $x$ の出力のレンジ $[-1,1]$ を均等に $5$ 分割して、$5$ レベルの量子化を行う。その量子化出力を入力信号値の小さい方から $q_1,q_2,q_3,q_4,q_5$ とする。それぞれの出現確率を求めよ。

(2) $Q_0$ の量子化出力のエントロピーを求めよ。

(3) $Q_0$ の量子化出力を最も効率よく表現する $2$ 元符号 $C_0$ を $1$ つ求めよ。

(4) $C_0$ の平均符号長を求めよ。

(5) 出力のエントロピーを最大とする $5$ レベル量子化器 $Q_1$ の量子化の境界 $d_i$（$i=1,2,3,4$）を求めよ。量子化の境界を $d_{i-1},d_i$ とした時、量子化操作 $Q()$ は下式で与えられる。

$$
Q(d_{i-1}\le x<d_i)=q_i.
$$

ただし、$d_0=-1,\ d_5=1$ である。

(6) 信号の再生には、各量子化出力 $q_i$ に対して、対応する量子化区間内の一つの値を量子化代表値として割り当てる。信号値と再生値の平均 $2$ 乗誤差により、量子化誤差を定義する。量子化器出力 $q_i$ に対して、量子化誤差を最小化する量子化代表値 $\widetilde{x}_i$ は下式で与えられることを示せ。

$$
\widetilde{x}_i=\frac{\displaystyle\int_{d_{i-1}}^{d_i}xp(x)\,dx}
{\displaystyle\int_{d_{i-1}}^{d_i}p(x)\,dx}.
$$

(7) 量子化器 $Q_1$ の $\widetilde{x}_i$（$i=1,2,3,4,5$）を求めよ。

### 题目描述

离散时间信号 $x$ 的取值服从上图给出的概率密度函数 $p(x)$。回答下列问题，并取 $\log_2 3=1.58$、$\log_2 5=2.32$。

(1) 量化器 $Q_0$ 把输入范围 $[-1,1]$ 等分为 $5$ 个区间并作 $5$ 级量化；按输入值从小到大把输出记为 $q_1,q_2,q_3,q_4,q_5$。求各输出的出现概率。

(2) 求 $Q_0$ 输出的熵。

(3) 给出一种能最高效表示 $Q_0$ 输出的二元码 $C_0$。

(4) 求 $C_0$ 的平均码长。

(5) 求使输出熵最大的 $5$ 级量化器 $Q_1$ 的四个量化边界 $d_i$（$i=1,2,3,4$）。若第 $i$ 个量化区间的边界为 $d_{i-1},d_i$，则

$$
Q(d_{i-1}\le x<d_i)=q_i,
$$

其中 $d_0=-1$、$d_5=1$。

(6) 为重建信号，要给每个量化输出 $q_i$ 指定其量化区间内的一个代表值，并以原信号值和重建值之间的均方误差定义量化误差。证明使输出 $q_i$ 所对应量化误差最小的代表值为

$$
\widetilde{x}_i=
\frac{\int_{d_{i-1}}^{d_i}xp(x)\,\mathrm dx}
{\int_{d_{i-1}}^{d_i}p(x)\,\mathrm dx}.
$$

(7) 求量化器 $Q_1$ 的全部代表值 $\widetilde{x}_i$（$i=1,2,3,4,5$）。

## **Kai**

### (1)

$p(x)=1-|x|$（$|x|\le1$）を、幅 $2/5$ の各区間で積分する。対称性より

$$
\begin{aligned}
P(q_1)=P(q_5)&=\frac12\left(\frac25\right)^2=\frac2{25},\\
P(q_2)=P(q_4)&=\frac12\left(\frac45\right)^2-\frac2{25}=\frac6{25},\\
P(q_3)&=1-2\left(\frac2{25}+\frac6{25}\right)=\frac9{25}.
\end{aligned}
$$

### (2)

指定の対数近似を用いると、

$$
\begin{aligned}
H(Q_0)&=-2\frac2{25}\log_2\frac2{25}
-2\frac6{25}\log_2\frac6{25}
-\frac9{25}\log_2\frac9{25}\\
&=2\log_2 5-\frac{16}{25}-\frac65\log_2 3\\
&\simeq\boxed{2.104\ \text{bit}}.
\end{aligned}
$$

### (3)

ハフマン法で重み $2,2,6,6,9$ を順次 $4,10,15,25$ に併合すると、次の符号を得る。

| 出力 | $q_1$ | $q_2$ | $q_3$ | $q_4$ | $q_5$ |
| --- | --- | --- | --- | --- | --- |
| 符号 $C_0$ | `000` | `01` | `10` | `11` | `001` |

### (4)

$$
\boxed{\overline L=3\frac4{25}+2\frac{21}{25}=\frac{54}{25}=2.16\ \text{bit}}.
$$

### (5)

$5$ 個の出力のエントロピーは、すべての出力確率が $1/5$ のとき最大値 $\log_2 5$ をとる。$-1\le d\le0$ に対して

$$
P(x<d)=\int_{-1}^d(1+x)\,dx=\frac{(d+1)^2}{2}
$$

なので、$P(x<d_i)=i/5$ と対称性から

$$
\boxed{
\begin{aligned}
d_1&=-1+\sqrt{\frac25},&d_2&=-1+\frac2{\sqrt5},\\
d_3&=1-\frac2{\sqrt5},&d_4&=1-\sqrt{\frac25}.
\end{aligned}}
$$

### (6)

区間 $i$ の代表値を $c$ とすると、全平均二乗誤差への寄与は

$$
D_i(c)=\int_{d_{i-1}}^{d_i}(x-c)^2p(x)\,dx.
$$

したがって、

$$
D_i'(c)=2c\int_{d_{i-1}}^{d_i}p(x)\,dx
-2\int_{d_{i-1}}^{d_i}xp(x)\,dx.
$$

$D_i'(c)=0$ より

$$
\boxed{c=\widetilde{x}_i=
\frac{\int_{d_{i-1}}^{d_i}xp(x)\,dx}{\int_{d_{i-1}}^{d_i}p(x)\,dx}}.
$$

また、$D_i''(c)=2P(q_i)>0$ なので、これが唯一の最小点である。

### (7)

$Q_1$ の各区間の確率は $1/5$ なので、$\widetilde{x}_i=5\int_{d_{i-1}}^{d_i}xp(x)\,dx$ である。左半分では原始関数 $x^2/2+x^3/3$ を用い、右半分は対称性から求めると、

$$
\boxed{
\begin{aligned}
\widetilde{x}_1&=-1+\frac{2\sqrt{10}}{15},\\
\widetilde{x}_2&=-1+\frac{8\sqrt5-2\sqrt{10}}{15},\\
\widetilde{x}_3&=0,\\
\widetilde{x}_4&=1-\frac{8\sqrt5-2\sqrt{10}}{15},\\
\widetilde{x}_5&=1-\frac{2\sqrt{10}}{15}.
\end{aligned}}
$$

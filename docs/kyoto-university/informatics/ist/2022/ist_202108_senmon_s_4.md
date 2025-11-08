---
sidebar_label: "2021年8月実施 専門科目 S-4"
tags:
  - Kyoto-University
  - Information Theory
  - Source Coding
---
# 京都大学 情報学研究科 知能情報学専攻 2021年8月実施 専門科目 S-4

## **Author**
[Isidore](https://github.com/heacsing), 祭音Myyura

## **Description**
以下では、実数 $p$ が $0 < p \leq 1$ を満たすときに、$N(p)$ を $N(p) = \lceil -\log_2 p \rceil$ すなわち $-\log_2 p$ 以上の最小の整数、と定義する。
たとえば、$N\left(\frac{1}{5}\right) = 3$, $N\left(\frac{1}{32}\right) = 5$ である。

情報源アルファベットが $\Sigma = \{a_1, a_2, \dots, a_n\}$ であるような記憶のない定常情報源 $S$ を考える。
情報源 $S$ が記号 $a_i$ を発生させる確率を $p_i$ と表し、

$$
P_1 = 0, \quad P_i = \sum_{k=1}^{i-1} p_k \quad (i = 2, \dots, n)
$$

と定義する。
さらに、$p_1 \geq p_2 \geq \dots \geq p_n > 0$ が成立していると仮定して、$a_i$ の記号 $0$ と $$ による符号化 $C$ を

$$
C(a_i): \; P_i \text{ を2進表現したときの } N(p_i) \text{ 桁目までの } 0 \text{ と } 1 \text{ の列 }
$$

と定義する。
たとえば、$P_i = \frac{3}{5}$ かつ $p_i = \frac{1}{5}$ であれば、$\frac{3}{5}$ の 2 進表現は $0.100 \cdots$ であり、$N\left(\frac{1}{5}\right) = 3$ であるから、$C(a_i) = 100$ である。
情報源 $S$ の情報量を $H(S)$, 平均符号長を $\overline{N}$ で表す。

### 設問 1
記号数が $n = 4$ であり、$p_i \; (i = 1, 2, 3, 4)$ が以下のように与えられている場合に符号 $C(a_1), C(a_2), C(a_3), C(a_4)$ を求めよ。

$$
p_1 = \frac{1}{3}, \quad p_2 = \frac{1}{4}, \quad p_3 = \frac{1}{4}, \quad p_4 = \frac{1}{6}
$$

### 設問 2
次の不等式が成立することを符号化 $C$ の定義を用いることによって示せ。

$$
H(S) \leq \overline{N} < H(S) + 1
$$

### 設問 3
記号数が $n = 6$ であり、$H(S) = \overline{N}$ が成立するような数列 $p_1, p_2, \ldots, p_6$ をすべて与えよ。
また、与えた数列の中で $p_6$ が最小のものについて、符号 $C(a_1), C(a_2), \ldots, C(a_6)$ を与えよ。

### 設問 4
$H(S) = \overline{N}$ が成立し、かつ $p_1 = p_2 = \dots = p_k = p_{k+1} = \dots = p_n$ が成立するとき、$C$ がハフマン符号になることを、$C$ をハフマン符号として構成する過程によって示せ。

### 設問 5
$H(S) = \overline{N}$ が成立し、かつ、ある $k \; (1 < k < n)$ について

$$
p_1 = p_2 = \dots = p_k > p_{k+1} = \dots = p_n
$$

が成立するとき、$C$ がハフマン符号になることを、$C$ をハフマン符号として構成する過程を与えることにより示せ。


## **Kai**
### 設問1

$$
C(a_1) = 00,\;C(a_2) = 01,\;C(a_3) = 10,\;C(a_4) = 110,\;
$$

### 設問2
By the definition of $\overline{N}$, we have

$$
\overline{N} = \sum_{i=1}^np_iN(p_i),
$$

since $-\log_{2}p_{i}\leq N(p_{i}) < -\log_{2}p_{i}+1$, we multiply both sides of the equation by $p_i \ (p_i > 0)$,

$$
-p_{i}\log_{2}p_{i}\leq p_{i}N(p_{i}) < -p_{i}\log_{2}p_{i}+1
$$

hence

$$
-\sum_{i=1}^{n}p_{i}\log_{2}p_{i}\leq \sum_{i=1}^{n}p_{i}N(p_{i}) < -\sum_{i=1}^{n}p_{i}\log_{2}p_{i}+1
$$

that is

$$
H(S)\leq \overline{N} < H(S)+1
$$

### 設問3
Sequences are:

$$
(\frac{1}{2},\frac{1}{4},\frac{1}{8},\frac{1}{16},\frac{1}{32},\frac{1}{32})
$$

$$
(\frac{1}{2},\frac{1}{4},\frac{1}{16},\frac{1}{16},\frac{1}{16},\frac{1}{16})
$$

$$
(\frac{1}{2},\frac{1}{8},\frac{1}{8},\frac{1}{8},\frac{1}{16},\frac{1}{16})
$$

$$
(\frac{1}{4},\frac{1}{4},\frac{1}{4},\frac{1}{8},\frac{1}{16},\frac{1}{16})
$$

$$
(\frac{1}{4},\frac{1}{4},\frac{1}{8},\frac{1}{8},\frac{1}{8},\frac{1}{8})
$$

The first sequence is the one that $p_6$ is minimized, the codes $C$ are

$$
\{0,10,110,1110,11110,11111\}
$$

### 設問4

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist_202108_senmon_s_4_p1.png" width="500" alt=""/>
</figure>

### 設問5

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist_202108_senmon_s_4_p2.png" width="500" alt=""/>
</figure>

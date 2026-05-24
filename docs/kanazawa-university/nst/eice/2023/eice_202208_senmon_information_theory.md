---
sidebar_label: 2022年8月実施 専門科目 情報理論
tags:
  - Kanazawa-University
  - Statistics-Data-Science.Information-Theory
---
# 金沢大学 自然科学研究科 電子情報通信学専攻 2022年8月実施 専門科目 情報理論

## **Author**
[金沢大学](https://www.kanazawa-u.ac.jp/)

## **Description**
無記憶情報源 $S=\{s_1,s_2\}$ において $s_1$ の発生確率 $P(s_1)$ が $p,\ 0\leq p\leq 1$ であった。この無記憶情報源 $S$ の出力を用いて $a_1=s_1,\ a_2=s_2$ とおき，送信記号集合 $A=\{a_1,a_2\}$ を構成する。

この送信記号集合 $A$ に属する記号 $a_i$ を，通信路行列

$$
T=
\begin{pmatrix}
1-q & q\\
q & 1-q
\end{pmatrix},
\qquad 0\leq q\leq 1
$$

である通信路 $C$ を介して送信したとき，受信記号集合 $B=\{b_1,b_2\}$ に属する記号 $b_j$ が受信されるとする。通信路 $C$ の通信路行列 $T$ の $i$ 行 $j$ 列要素は，$a_i$ を送信したときに $b_j$ が受信される事象の発生確率を表す。

ただし，エントロピー関数 $H(x),\ 0\leq x\leq 1$ は

$$
H(x)=-x\log_2 x-(1-x)\log_2(1-x)
$$

であり，$x=1/2$ のとき最大値 $1$ となる。

### 問1
$S$ の 2 次拡大情報源 $S^2$ のエントロピー $H(S^2)$ を求め，エントロピー関数 $H(p)$ を用いて表しなさい。

### 問2
符号 $C$ では $S^2$ の情報源記号が符号化され，情報源記号 $s_1s_1,\ s_1s_2$ は下表に示す $c_1,\ c_2$ にそれぞれ符号化される。

| 情報源記号 | 符号語 |
|---|---|
| $s_1s_1$ | $c_1=000000$ |
| $s_1s_2$ | $c_2=001110$ |
| $s_2s_1$ | $c_3=$ |
| $s_2s_2$ | $c_4=$ |

符号語 $c_k,c_\ell\in C$ のハミング距離 $h(c_k,c_\ell)$ を用いて

$$
d_{\min}(C)=\min_{c_k\neq c_\ell,\ c_k,c_\ell\in C}h(c_k,c_\ell)
$$

と定義される。$C$ の最小ハミング距離 $d_{\min}(C)$ が $3$ であり，$s_2s_1,\ s_2s_2$ それぞれの符号語 $c_3,\ c_4$ のハミング重み $w(c_3),w(c_4)$ がいずれも $3$ であるとする。

このとき，符号語 $c_3,\ c_4$ となりえる符号語の組み合わせの数を求めなさい。ただし，ある符号語 $c_a,c_b$ を $C$ として採用できるとき，$c_3=c_a,\ c_4=c_b$ という割り当てと $c_3=c_b,\ c_4=c_a$ という割り当ては，符号語 $c_3,c_4$ となりえる符号語の組み合わせの数としては 1 つと数えることとする。

### 問3
$H(B)$ を求め，エントロピー関数 $H(\alpha)$ を用いて表しなさい。ただし，

$$
\alpha=p+q-2pq
$$

とする。

### 問4
事後確率 $P(a_1|b_1)$ と $P(a_1|b_2)$ を求めなさい。

### 問5
$H(A|B)$ を求め，エントロピー関数を用いて表しなさい。そして，通信路 $C$ の通信路容量を求めなさい。

## **Kai**

### 問1
$S^2$ の各情報源記号の発生確率は

$$
P(s_1s_1)=p^2
$$

$$
P(s_1s_2)=P(s_2s_1)=p(1-p)
$$

$$
P(s_2s_2)=(1-p)^2
$$

である。

したがって，

$$
\begin{aligned}
H(S^2)
&=-p^2\log_2 p^2
-2p(1-p)\log_2 \{p(1-p)\}
-(1-p)^2\log_2 (1-p)^2 \\
&=-2p^2\log_2 p
-2p(1-p)\log_2 p
-2p(1-p)\log_2(1-p)
-2(1-p)^2\log_2(1-p) \\
&=-2p\log_2 p-2(1-p)\log_2(1-p) \\
&=2H(p)
\end{aligned}
$$

よって，

$$
H(S^2)=2H(p)
$$

である。

### 問2
$c_1=000000$ であり，$w(c_3)=w(c_4)=3$ であるため，

$$
h(c_1,c_3)=h(c_1,c_4)=3
$$

となり，これは $d_{\min}(C)=3$ を満たす。

次に，$c_2=001110$ とのハミング距離を考える。$c_2$ の 1 が立っている位置は第 3, 4, 5 ビットである。$c_3,c_4$ はハミング重み 3 であるから，$c_2$ と 1 の位置が 2 個以上重なると，$c_2$ とのハミング距離が 2 以下となり，$d_{\min}(C)=3$ を満たさない。

したがって，$c_3,c_4$ の候補は，$c_2$ の 1 の位置と高々 1 個だけ重なる符号語である。

この条件を満たす符号語は次の 10 個である。

| $c_3,c_4$ の符号語の候補 | 符号語 |
|---|---|
| $c_{\mathrm{cand}1,1}$ | $111000$ |
| $c_{\mathrm{cand}1,2}$ | $101001$ |
| $c_{\mathrm{cand}1,3}$ | $011001$ |
| $c_{\mathrm{cand}2,1}$ | $110100$ |
| $c_{\mathrm{cand}2,2}$ | $100101$ |
| $c_{\mathrm{cand}2,3}$ | $010101$ |
| $c_{\mathrm{cand}3,1}$ | $110010$ |
| $c_{\mathrm{cand}3,2}$ | $100011$ |
| $c_{\mathrm{cand}3,3}$ | $010011$ |
| $c_{\mathrm{cand}4}$ | $110001$ |

ただし，$c_{\mathrm{cand}4}=110001$ は，他の 9 個の候補のいずれとも 1 の位置が 2 個重なる。したがって，他の候補とのハミング距離は

$$
h=2
$$

となり，$c_3,c_4$ の組として同時に採用することはできない。

一方，残りの 9 個の候補については，1 つの符号語に対して，ハミング距離が 3 以上となる相手が 4 個存在する。

したがって，順序を区別しない組み合わせの数は

$$
\frac{9\times 4}{2}=18
$$

である。

よって，求める符号語 $c_3,c_4$ となりえる符号語の組み合わせの数は

$$
18
$$

である。


### 問3
受信記号 $b_1$ の発生確率は

$$
\begin{aligned}
P(b_1)
&=P(a_1)P(b_1|a_1)+P(a_2)P(b_1|a_2)\\
&=p(1-q)+(1-p)q\\
&=p+q-2pq
\end{aligned}
$$

である。

ここで

$$
\alpha=p+q-2pq
$$

より，

$$
P(b_1)=\alpha
$$

また，

$$
P(b_2)=1-\alpha
$$

である。

したがって，

$$
\begin{aligned}
H(B)
&=-\alpha\log_2\alpha-(1-\alpha)\log_2(1-\alpha)\\
&=H(\alpha)
\end{aligned}
$$

よって，

$$
H(B)=H(\alpha)
$$

である。

### 問4
ベイズの定理より，

$$
P(a_1|b_1)
=
\frac{P(a_1)P(b_1|a_1)}{P(b_1)}
$$

である。ここで，

$$
P(a_1)=p,\qquad P(b_1|a_1)=1-q,\qquad P(b_1)=\alpha
$$

だから，

$$
P(a_1|b_1)=\frac{p(1-q)}{\alpha}
$$

である。

同様に，

$$
P(a_1|b_2)
=
\frac{P(a_1)P(b_2|a_1)}{P(b_2)}
$$

であり，

$$
P(b_2|a_1)=q,\qquad P(b_2)=1-\alpha
$$

より，

$$
P(a_1|b_2)=\frac{pq}{1-\alpha}
$$

である。

### 問5
問4より，

$$
P(a_1|b_1)=\frac{p(1-q)}{\alpha},
\qquad
P(a_2|b_1)=\frac{(1-p)q}{\alpha}
$$

であり，

$$
P(a_1|b_2)=\frac{pq}{1-\alpha},
\qquad
P(a_2|b_2)=\frac{(1-p)(1-q)}{1-\alpha}
$$

である。また，

$$
P(b_1)=\alpha,\qquad P(b_2)=1-\alpha
$$

である。

したがって，条件付きエントロピー $H(A|B)$ は

$$
\begin{aligned}
H(A|B)
=&\ P(b_1)H(A|b_1)+P(b_2)H(A|b_2)\\
=&\ \alpha
\left(
-\frac{p(1-q)}{\alpha}\log_2\frac{p(1-q)}{\alpha}
-\frac{(1-p)q}{\alpha}\log_2\frac{(1-p)q}{\alpha}
\right)\\
&+(1-\alpha)
\left(
-\frac{pq}{1-\alpha}\log_2\frac{pq}{1-\alpha}
-\frac{(1-p)(1-q)}{1-\alpha}
\log_2\frac{(1-p)(1-q)}{1-\alpha}
\right)
\end{aligned}
$$

となる。これを整理すると，

$$
\begin{aligned}
H(A|B)
=&-p(1-q)\log_2\frac{p(1-q)}{\alpha}
-(1-p)q\log_2\frac{(1-p)q}{\alpha}\\
&-pq\log_2\frac{pq}{1-\alpha}
-(1-p)(1-q)\log_2
\frac{(1-p)(1-q)}{1-\alpha}
\end{aligned}
$$

である。

さらに対数を展開すると，

$$
\begin{aligned}
H(A|B)
=&-p(1-q)\{\log_2 p+\log_2(1-q)-\log_2\alpha\}\\
&-(1-p)q\{\log_2(1-p)+\log_2 q-\log_2\alpha\}\\
&-pq\{\log_2 p+\log_2 q-\log_2(1-\alpha)\}\\
&-(1-p)(1-q)
\{\log_2(1-p)+\log_2(1-q)-\log_2(1-\alpha)\}
\end{aligned}
$$

となる。各項をまとめると，

$$
\begin{aligned}
H(A|B)
=&-p\log_2 p-(1-p)\log_2(1-p)\\
&-q\log_2 q-(1-q)\log_2(1-q)\\
&+\alpha\log_2\alpha+(1-\alpha)\log_2(1-\alpha)
\end{aligned}
$$

である。

したがって，

$$
H(A|B)=H(p)+H(q)-H(\alpha)
$$

となる。

次に，相互情報量は

$$
I(A;B)=H(A)-H(A|B)
$$

であるから，

$$
\begin{aligned}
I(A;B)
&=H(p)-\{H(p)+H(q)-H(\alpha)\}\\
&=H(\alpha)-H(q)
\end{aligned}
$$

である。

よって，通信路 $C$ の通信路容量は

$$
C_{\mathrm{cap}}
=
\max_p I(A;B)
=
\max_p \{H(\alpha)-H(q)\}
$$

である。

ここで，$H(q)$ は $p$ に依存しないので，$H(\alpha)$ が最大となるように $p$ を選べばよい。エントロピー関数 $H(\alpha)$ は

$$
\alpha=\frac{1}{2}
$$

のとき最大値 $1$ をとる。

また，

$$
\alpha=p+q-2pq
$$

であるから，$q\neq \frac{1}{2}$ のとき，

$$
p=\frac{1}{2}
$$

とすれば

$$
\alpha=\frac{1}{2}
$$

となる。したがって，

$$
C_{\mathrm{cap}}=1-H(q)
$$

である。

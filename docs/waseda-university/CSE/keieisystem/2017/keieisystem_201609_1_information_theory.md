---
sidebar_label: "2016年9月実施 情報数理応用 問題1"
tags:
  - Waseda-University
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Conditional-Entropy
  - Computer-Science.Information-Theory.Mutual-Information
  - Computer-Science.Information-Theory.Typical-Sequence
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2016年9月実施 情報数理応用 問題1

## **Author**
祭音Myyura

## **Description**

シンボル $a_j$ が確率 $P(a_j)$ で独立に生起する定常無記憶情報源 $X$ と、シンボル $b_k$ が確率 $P(b_k)$ で独立に生起する定常無記憶情報源 $Y$ を考える。また $P(a_j\mid b_k)$ を条件付き確率とする。

1. エントロピー $H(X)$ の式を示せ。
2. エントロピーの意味と実務上の意義を説明せよ。
3. 条件付きエントロピー $H(X\mid Y)$ の定義と意味を説明せよ。
4. 相互情報量 $I(X;Y)$ の定義と意味を説明せよ。
5. 標準系列とエントロピーの関係、その概念と意味を説明せよ。

## **Kai**
以下では対数の底を $2$ とし、単位を bit とする。

### [小問 1]

$$
\boxed{
H(X)=-\sum_{j=1}^{M}P(a_j)\log_2P(a_j)
}
$$

である。$P(a_j)=0$ の項は $0\log 0=0$ と約束する。

### [小問 2]

事象 $a_j$ の自己情報量は $-\log_2P(a_j)$ であり、エントロピーはその期待値である。したがって、情報源の不確実性、または1シンボルを観測したときに得られる平均情報量を表す。

実務上は、無損失圧縮に必要な平均符号長の理論的下限を与える。定常無記憶情報源を十分長いブロックで符号化すれば、平均符号長を1シンボル当たり $H(X)$ bit に近づけられるが、それより小さくすることは一般にできない。

### [小問 3]

$$
\boxed{
H(X\mid Y)
=-\sum_{k=1}^{N}P(b_k)
\sum_{j=1}^{M}P(a_j\mid b_k)
\log_2P(a_j\mid b_k)
}
$$

である。これは $Y$ を知った後にも残る $X$ の平均的な不確実性であり、

$$
H(X\mid Y)=H(X,Y)-H(Y)
$$

を満たす。

### [小問 4]

同時確率を $P(a_j,b_k)$ とすると、

$$
\boxed{
I(X;Y)
=\sum_{j,k}P(a_j,b_k)
\log_2\frac{P(a_j,b_k)}{P(a_j)P(b_k)}
}
$$

である。また

$$
I(X;Y)
=H(X)-H(X\mid Y)
=H(Y)-H(Y\mid X)
$$

であるから、$Y$ を知ることによって減少する $X$ の不確実性を表す。常に $I(X;Y)\geq0$ であり、独立なら $I(X;Y)=0$ である。

### [小問 5]

$n$ 個の出力列 $x^n=(x_1,\ldots,x_n)$ に対し、$\varepsilon$-標準系列集合を

$$
A_\varepsilon^{(n)}
=\left\{
x^n:
\left|
-\frac1n\log_2P(x^n)-H(X)
\right|<\varepsilon
\right\}
$$

と定義する。漸近等分割性より

$$
P\left(A_\varepsilon^{(n)}\right)\to1
\qquad(n\to\infty).
$$

標準系列では

$$
P(x^n)\approx2^{-nH(X)},\qquad
\left|A_\varepsilon^{(n)}\right|\approx2^{nH(X)}.
$$

すなわち、長い系列のほとんどは、ほぼ等確率な約 $2^{nH(X)}$ 個の系列へ集中する。これが典型集合だけを符号化して平均符号長を $nH(X)$ bit に近づけられる理由である。

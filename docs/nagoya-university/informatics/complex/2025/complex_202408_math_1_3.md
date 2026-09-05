---
sidebar_label: "2024年8月実施 数1 [3]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2024年8月実施 数1 [3]

## **Author**
Codex

## **Description**

### 題意の要約

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/ae71f02839037f5b598d671555ed309b.pdf)

実 $n\times n$ 行列 $X$ が，任意の非零実ベクトル $x$ に対して $x^TXx>0$ を満たすとき正定値と呼ぶ。
対称性を仮定しない場合にも，正定値行列の固有値は必ず正の実数になるか。
Yes または No を選び，Yes なら証明を，No なら条件を満たす反例とその検証を示す。

## **Kai**

答えは **No**。例えば

$$
X=\begin{pmatrix}1&-1\\1&1\end{pmatrix}
$$

を取ると，任意の $x=(u,v)^T\ne0$ に対して

$$
x^TXx=u(u-v)+v(u+v)=u^2+v^2>0
$$

なので $X$ は題意の定義で正定値である。一方，

$$
\det(\lambda I-X)=(\lambda-1)^2+1
$$

より固有値は $\boxed{1+i,\ 1-i}$ であり，実数ではない。

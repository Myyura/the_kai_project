---
sidebar_label: "2011年8月実施 問題22 情報科学 I"
tags:
  - Nagoya-Institute-of-Technology
  - Computer-Science.Algorithm-Design.Divide-and-Conquer
  - Computer-Science.Algorithm-Design.Karatsuba-Integer-Multiplication
  - Computer-Science.Algorithm-Design.Recurrence-Relation-Complexity
  - Computer-Science.Algorithm-Design.Master-Theorem
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---

# 名古屋工業大学 工学研究科 情報工学専攻 2011年8月実施 問題22 情報科学 I

## **Author**
祭音Myyura

## **Description**

**I**　$n$ を2のべき乗とする。2つの $n$ ビット2進数 $A_n=a_{n-1},a_{n-2},\ldots,a_0$, $B_n=b_{n-1},b_{n-2},\ldots,b_0$ の乗算に必要な時間計算量を $M(n)$ とし，加算に必要な時間計算量を $S(n)$ とする。以下の問いについて答えよ。

(1) $A_n,B_n$ がそれぞれ，大きさ $n$ の配列 $A[0],\ldots,A[n-1]$ と $B[0],\ldots,B[n-1]$ に格納されている（$A[i],B[i]\in\{0,1\}\ (0\le i\le n-1)$）とする。$A_n$ と $B_n$ の和の計算結果を大きさ $n+1$ の配列 $R[0],\ldots,R[n]$ に格納するとする。また，各 $i\ (0\le i\le n-1)$ に対して，$i$ 桁目の桁あげの結果を $C[i+1]\ (0\le i\le n-1)$ に格納するとする。このとき，$C[i]\ (1\le i\le n)$，$R[i]\ (0\le i\le n)$ を，それぞれ $A,B,C$ の要素を用いて表せ。それを利用して，$S(n)=O(n)$ を示せ。

(2) $A_n$ と $B_n$ の減算 $(A_n-B_n)$ に必要な時間計算量を $D(n)$ とするとき，$D(n)=O(n)$ を示せ。

(3)

$$
\begin{aligned}
A^U_{n/2}&=a_{n-1},\ldots,a_{n/2},\\
A^L_{n/2}&=a_{(n/2)-1},\ldots,a_0,\\
B^U_{n/2}&=b_{n-1},\ldots,b_{n/2},\\
B^L_{n/2}&=b_{(n/2)-1},\ldots,b_0
\end{aligned}
$$

とするとき，再帰的な乗算アルゴリズムを記述し，$M(n)\le4M(n/2)+3S(2n)+O(n)$ となることを示し，$M(n)=O(n^2)$ を証明せよ。

(4) 次の等式

$$
\begin{aligned}
&A^U_{n/2}\times B^L_{n/2}+B^U_{n/2}\times A^L_{n/2}\\
&=(A^U_{n/2}+A^L_{n/2})\times(B^U_{n/2}+B^L_{n/2})\\
&\quad-A^U_{n/2}\times B^U_{n/2}-A^L_{n/2}\times B^L_{n/2}
\end{aligned}
$$

を利用して，$M(n)=o(n^2)$ を示せ。

#### 题目描述

**I**　设 $n$ 为2的幂。两个 $n$ 位二进制数为 $A_n=a_{n-1},a_{n-2},\ldots,a_0$、$B_n=b_{n-1},b_{n-2},\ldots,b_0$。将乘法所需时间复杂度记为 $M(n)$，加法所需时间复杂度记为 $S(n)$。回答下列问题。

(1) 假设 $A_n,B_n$ 分别存储在大小为 $n$ 的数组 $A[0],\ldots,A[n-1]$ 与 $B[0],\ldots,B[n-1]$ 中，其中 $A[i],B[i]\in\{0,1\}\ (0\le i\le n-1)$。将两数相加的结果存储在大小为 $n+1$ 的数组 $R[0],\ldots,R[n]$ 中。对每个 $i\ (0\le i\le n-1)$，将第 $i$ 位的进位结果存储在 $C[i+1]$ 中。请分别使用 $A,B,C$ 的元素表示 $C[i]\ (1\le i\le n)$ 与 $R[i]\ (0\le i\le n)$，并利用结果证明 $S(n)=O(n)$。

(2) 将减法 $A_n-B_n$ 所需时间复杂度记为 $D(n)$，证明 $D(n)=O(n)$。

(3) 令

$$
\begin{aligned}
A^U_{n/2}&=a_{n-1},\ldots,a_{n/2},\\
A^L_{n/2}&=a_{(n/2)-1},\ldots,a_0,\\
B^U_{n/2}&=b_{n-1},\ldots,b_{n/2},\\
B^L_{n/2}&=b_{(n/2)-1},\ldots,b_0.
\end{aligned}
$$

请写出递归乘法算法，说明 $M(n)\le4M(n/2)+3S(2n)+O(n)$，并证明 $M(n)=O(n^2)$。

(4) 利用恒等式

$$
\begin{aligned}
&A^U_{n/2}\times B^L_{n/2}+B^U_{n/2}\times A^L_{n/2}\\
&=(A^U_{n/2}+A^L_{n/2})\times(B^U_{n/2}+B^L_{n/2})\\
&\quad-A^U_{n/2}\times B^U_{n/2}-A^L_{n/2}\times B^L_{n/2}
\end{aligned}
$$

证明 $M(n)=o(n^2)$。

## **Kai**

### (1)

$C[0]=0$ とおく。各桁について、和と次の桁への桁上げは

$$
\boxed{C[i]=\left\lfloor
\frac{A[i-1]+B[i-1]+C[i-1]}{2}
\right\rfloor}\qquad(1\le i\le n)
$$

で求まる。また、

$$
\boxed{R[i]=(A[i]+B[i]+C[i])\bmod 2}\qquad(0\le i\le n-1),
$$

$$
\boxed{R[n]=C[n]}
$$

である。各 $i$ に対する演算回数は定数であり、これを $n$ 桁について行うので、

$$
\boxed{S(n)=O(n)}
$$

となる。

### (2)

まず $A_n\ge B_n$ の場合を考える。$T[i]\in\{0,1\}$ を $i$ 桁目へ入る借りとし、$T[0]=0$ とする。各 $i=0,\ldots,n-1$ について

$$
x_i=A[i]-B[i]-T[i]
$$

を計算し、

$$
(R[i],T[i+1])=
\begin{cases}
(x_i,0),&x_i\ge 0,\\
(x_i+2,1),&x_i<0
\end{cases}
$$

とすればよい。各桁で定数回の演算しか行わないため、

$$
\boxed{D(n)=O(n)}
$$

である。

$A_n<B_n$ の場合は大小比較後に $B_n-A_n$ を同じ方法で求め、負号を付ける。比較も $O(n)$ なので全体の評価は変わらない。

### (3)

$h=n/2$ とおくと、

$$
A_n=2^hA^U_h+A^L_h,\qquad
B_n=2^hB^U_h+B^L_h
$$

である。次の四つを再帰的に計算する。

$$
P_0=A^L_hB^L_h,\quad
P_1=A^U_hB^L_h,\quad
P_2=A^L_hB^U_h,\quad
P_3=A^U_hB^U_h.
$$

すると、積は

$$
A_nB_n=2^nP_3+2^h(P_1+P_2)+P_0
$$

である。桁ずらしは $O(n)$、四つの $2n$ ビット以下の数をまとめる加算は 3 回で済む。したがって、

$$
M(n)\le 4M(n/2)+3S(2n)+O(n)
=4M(n/2)+O(n).
$$

この漸化式にマスター定理を適用すると、

$$
M(n)=O\!\left(n^{\log_2 4}\right)=\boxed{O(n^2)}
$$

を得る。

### (4)

ビット長が 3 以下なら直接乗算し、それより大きい場合を再帰的に分割する。まず

$$
P_0=A^L_hB^L_h,\qquad P_2=A^U_hB^U_h
$$

を計算し、さらに

$$
P_1=(A^U_h+A^L_h)(B^U_h+B^L_h)-P_2-P_0
$$

を計算する。これにより、積は

$$
A_nB_n=2^nP_2+2^hP_1+P_0
$$

となり、再帰的な乗算は 3 回で済む。二つの半分の和は高々 $n/2+1$ ビットなので、加減算と桁ずらしも含めて厳密には

$$
M(n)\le 3M(n/2+1)+O(n)
$$

と評価できる。同じ分割法を任意のビット長にも定義して端数を切り上げれば、
$F(n)=M(n+2)$ とおいて $F(n)\le3F(\lceil n/2\rceil)+O(n)$ となるので、マスター定理より

$$
M(n)=O\!\left(n^{\log_2 3}\right).
$$

$\log_2 3<2$ であるから、

$$
\frac{M(n)}{n^2}
=O\!\left(n^{\log_2 3-2}\right)\longrightarrow 0
$$

であり、

$$
\boxed{M(n)=o(n^2)}
$$

となる。

## **Reference**

- [公式原題（公式サイトの保存版）](https://web.archive.org/web/20130323025054/http://www.nitech.ac.jp:80/examination/test/files/24-030.pdf)

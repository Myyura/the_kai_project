---
sidebar_label: '2025年8月実施 数学 第2問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Permutation-Matrix
  - Mathematics.Linear-Algebra.Rotation-Matrix
---

# 東京大学 工学系研究科 2025年8月実施 数学 第2問

## **Author**
GPT-5.6 Sol

## **Description**

固有値と固有ベクトルは複素数および複素ベクトルの範囲で考える。

### I

$n\ge3$ を整数とし、

$$
A=\begin{pmatrix}
\cos\frac{2\pi}{n}&-\sin\frac{2\pi}{n}\\
\sin\frac{2\pi}{n}&\cos\frac{2\pi}{n}
\end{pmatrix}
$$

とする。

1. $A$ のすべての固有値と、それぞれに対応する単位固有ベクトルを求めよ。
2. $A^{-1}$ を求めよ。

### II

$$
B=\begin{pmatrix}
0&0&0&0&1\\
1&0&0&0&0\\
0&0&0&1&0\\
0&0&1&0&0\\
0&1&0&0&0
\end{pmatrix}
$$

について、次を求めよ。

1. $B$ のすべての固有値。
2. $B^2,B^3,B^4,B^5$。
3. $B^2$ と $B^5$ のすべての固有値。

### III

$$
C=\begin{pmatrix}
\cos\frac{2\pi}{5}&0&0&0&0&0&-\sin\frac{2\pi}{5}\\
0&0&0&0&0&1&0\\
0&1&0&0&0&0&0\\
0&0&0&0&1&0&0\\
0&0&0&1&0&0&0\\
0&0&1&0&0&0&0\\
\sin\frac{2\pi}{5}&0&0&0&0&0&\cos\frac{2\pi}{5}
\end{pmatrix}
$$

とする。$C^m=E$ となる最小の正整数 $m$ を求めよ。ただし $E$ は単位行列である。

## **Kai**

### I

$\theta=2\pi/n$ とおく。$A$ は角 $\theta$ の回転行列であり、

$$
\boxed{\lambda_+=e^{i\theta},\qquad \lambda_-=e^{-i\theta}}
$$

を固有値にもつ。対応する単位固有ベクトルとして、

$$
\boxed{
v_+=\frac1{\sqrt2}\begin{pmatrix}1\\-i\end{pmatrix},
\qquad
v_-=\frac1{\sqrt2}\begin{pmatrix}1\\i\end{pmatrix}
}
$$

を取れる。実際、$Av_\pm=e^{\pm i\theta}v_\pm$ である。

$A$ は直交行列なので、

$$
\boxed{
A^{-1}=A^{\mathsf T}
=\begin{pmatrix}
\cos\theta&\sin\theta\\
-\sin\theta&\cos\theta
\end{pmatrix}
}
$$

となる。

### II.1

標準基底に対する $B$ の作用は

```text
e1 -> e2 -> e5 -> e1
e3 <-> e4
```

である。したがって、置換は長さ 3 の巡回置換と長さ 2 の巡回置換に分かれる。

$\omega=e^{2\pi i/3}$ とおけば、長さ 3 の部分の固有値は $1,\omega,\omega^2$、長さ 2 の部分の固有値は $1,-1$ である。よって重複度を含めて

$$
\boxed{1,1,-1,\omega,\omega^2}
$$

を得る。

### II.2

基底ベクトルの移り方を順に追うと、

$$
B^2=\begin{pmatrix}
0&1&0&0&0\\
0&0&0&0&1\\
0&0&1&0&0\\
0&0&0&1&0\\
1&0&0&0&0
\end{pmatrix},
\qquad
B^3=\begin{pmatrix}
1&0&0&0&0\\
0&1&0&0&0\\
0&0&0&1&0\\
0&0&1&0&0\\
0&0&0&0&1
\end{pmatrix},
$$

$$
B^4=\begin{pmatrix}
0&0&0&0&1\\
1&0&0&0&0\\
0&0&1&0&0\\
0&0&0&1&0\\
0&1&0&0&0
\end{pmatrix},
\qquad
B^5=\begin{pmatrix}
0&1&0&0&0\\
0&0&0&0&1\\
0&0&0&1&0\\
0&0&1&0&0\\
1&0&0&0&0
\end{pmatrix}.
$$

### II.3

$B^r$ の固有値は $B$ の固有値の $r$ 乗である。したがって、

$$
\boxed{\operatorname{Spec}(B^2)=\{1,1,1,\omega,\omega^2\}}
$$

および

$$
\boxed{\operatorname{Spec}(B^5)=\{1,1,-1,\omega,\omega^2\}}
$$

となる。各集合では重複度も表示している。

### III

座標を適切に並べ替えると、$C$ の作用は次の三つの独立な部分に分かれる。

1. $\operatorname{span}\{e_1,e_7\}$ 上では角 $2\pi/5$ の回転であり、位数は $5$。
2. $e_2\to e_3\to e_6\to e_2$ は長さ $3$ の巡回置換であり、位数は $3$。
3. $e_4\leftrightarrow e_5$ は交換であり、位数は $2$。

よって $C^m=E$ ならば $m$ は $5,3,2$ のすべてで割り切れなければならない。逆にその最小公倍数では各部分が単位変換になるから、

$$
\boxed{m=\operatorname{lcm}(5,3,2)=30}
$$

である。

## **Reference**

- [東京大学大学院工学系研究科 2026年度大学院入学試験問題 数学](https://www.t.u-tokyo.ac.jp/hubfs/admission/2026/M_J_E_2026.pdf)

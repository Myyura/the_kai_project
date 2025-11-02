---
sidebar_label: "2025年度 数学 1"
tags:
  - Kobe-University
---
# 神戸大学 システム情報学研究科 2025年度 数学 1

## **Author**
祭音Myyura

## **Description**
つぎの各問いに答えよ.

### (1)
$f(x)$ を区間 $[0,1]$ で定義された非負連続関数とする。任意の $b>0$ に対して，等式

$$
\int_{0}^{a} f(x)dx = b \int_{a}^{1} f(x)dx
$$

を満たす $a\in[0,1]$ が存在することを示せ。
また，$f(x)=\frac{1}{1+x^{2}}, b=2$ としたとき，$a$ の値を求めよ。

### (2)
$2$ 次以下の $1$ 変数多項式のなす実ベクトル空間

$$
V={a_0+a_1x+a_2x^2 : a_0,a_1,a_2 \in \mathbb{R},}
$$

を考える。$V$ 上の線形変換 $T$ を $T(f(x))=f(2+3x)$ で定義する。

(2-a) $V$ の基底 $\{1,x,x^2\}$ に関する線形変換 $T$ の表現行列 $A$ を求めよ。

(2-b) (2-a) で得られた $A$ の固有値および線形変換 $T$ の固有値をそれぞれ求めよ。

## **Kai**
### (1)
まず

$$
g(a)=\int_{0}^{a} f(x)dx - b\int_{a}^{1} f(x)dx
$$

とおく。積分の線形性より

$$
g(a)=(1+b)\int_{0}^{a} f(x)dx - b\int_{0}^{1} f(x)dx.
$$

$f$ は非負連続だから $a\mapsto \int_{0}^{a} f$ は連続、したがって $g$ も連続。
さらに

$$
g(0)=-b\int_{0}^{1}f(x)dx \le 0,\qquad
g(1)=\int_{0}^{1}f(x)dx \ge 0 .
$$

もし $\int_{0}^{1} f=0$（すなわち $f\equiv 0$）なら任意の $a$ が解。そうでなければ
$g(0)<0, g(1)>0$ となるので中間値の定理により $g(a)=0$ を満たす $a\in[0,1]$ が存在する。

つぎに $f(x)=\dfrac{1}{1+x^2}, b=2$ のとき

$$
\int_{0}^{a}\frac{dx}{1+x^2}=\arctan a, \qquad
\int_{a}^{1}\frac{dx}{1+x^2}=\arctan1-\arctan a=\frac{\pi}{4}-\arctan a .
$$

条件式は

$$
\arctan a = 2\left(\frac{\pi}{4}-\arctan a\right)
\Longrightarrow
3\arctan a=\frac{\pi}{2}
\Longrightarrow
\arctan a=\frac{\pi}{6}.
$$

したがって

$$
\boxed{a=\arctan\left(\frac{\pi}{6}\right)=\frac{1}{\sqrt{3}}, }.
$$

### (2)
#### (2-a)
基底 ${1,x,x^2}$ に対し

$$
T(1)=1 \Rightarrow [1,0,0]^{\mathsf T},\qquad
T(x)=2+3x \Rightarrow [2,3,0]^{\mathsf T},\qquad
T(x^2)=(2+3x)^2=4+12x+9x^2 \Rightarrow [4,12,9]^{\mathsf T}.
$$

よって列をこれらの座標とする表現行列は

$$
\boxed{
A=
\begin{pmatrix}
1 & 2 & 4\\
0 & 3 & 12\\
0 & 0 & 9
\end{pmatrix}}
$$

である。

#### (2-b)
上三角行列の固有値は対角成分なので

$$
\boxed{\lambda(A)=\{1,3,9\}}.
$$

基底によらず線形変換 $T$ の固有値は行列の固有値と一致するから，

$$
\boxed{\lambda(T)=\{1,3,9\}}.
$$

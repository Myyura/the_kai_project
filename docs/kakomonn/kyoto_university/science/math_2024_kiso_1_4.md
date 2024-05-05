---
comments: false
description: 京都大学 大学院 理学研究科 数学・数理解析専攻 2024年度 基礎科目 [1] ~ [4]
keywords: Kyoto-University, 2024
---

## **Source**
京都大学 大学院 理学研究科 数学・数理解析専攻 2024年度 基礎科目 \[1\] ~ \[4\]

## **Description**
### \[2\]
$a$を複素数とし、複素$3$次正方行列$A$を

$$
A=
\begin{pmatrix}
a-1 & 0 & 0 \\ 1 & -a & 1 \\ 2a & -2a & a+1
\end{pmatrix}
$$

と定める。行列$A$の固有値を全て求めよ。また、$A$の階数を求めよ。

### \[3\]
$n,m$を$n \ge 2m$を満たす正の整数とする。$V$を有限次元複素ベクトル空間とする。
$f: V\rightarrow V$を$f^n = f^m$を満たす線形写像とする。こと時、

$$
V = \text{Ker}(f^m) \oplus \text{Im} (f^m)
$$

を示せ。ここで、$\text{Ker}(f^m)$は$f^m$の核であり、$\text{Im}(f^m)$は$f^m$の像である。


## **Kai**
### \[2\]
(i) $A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&= \begin{vmatrix}
a-1-\lambda & 0 & 0 \\ 1 & -a-\lambda & 1 \\ 2a & -2a & a+1-\lambda
\end{vmatrix}
\\
&= (a-1-\lambda)
\begin{vmatrix} -a-\lambda & 1 \\ -2a & a+1-\lambda \end{vmatrix}
\\
&= -(\lambda-a+1)(\lambda^2 - \lambda - a(a-1))
\\
&= -(\lambda-a+1)(\lambda - a)(\lambda + a - 1)
\\
\therefore \ \ 
\lambda &= a-1, a, -a+1
\end{aligned}
$$

である。

(ii) $A$ を列基本変形すると、次のようにできる：

$$
\begin{aligned}
\begin{pmatrix}
a-1 & 0 & 0 \\ 0 & 1 & 0 \\ a-1 & a+1 & a(a-1)
\end{pmatrix}
.
\end{aligned}
$$

これを構成する3つの列ベクトルの1次独立性に注目すると、$A$ のランクは、$a=1$ のときは $1$ , $a=0$ のときは $2$ , その他のときは $3$であることがわかる。

### \[3\]
#### (i)
$v \in V$ に対して

$$
\begin{aligned}
w &= f^{n-m}(v)
,\\
u &= v - w
\end{aligned}
$$

とおく。
$n \geq 2m$ なので、

$$
\begin{aligned}
w &= f^m \left( f^{n-2m} (v) \right)
\end{aligned}
$$

と書け、 $f^{n-2m}(v) \in V$ なので $w \in \mathrm{Im}(f^m)$ である。
また、

$$
\begin{aligned}
f^m(u)
&= f^m(v) - f^n(v)
\\
&= 0
\end{aligned}
$$

なので、 $u \in \mathrm{Ker}(f^m)$ である。
したがって、任意の $v \in V$ に対して

$$
\begin{aligned}
v = u + w
\end{aligned}
$$

であるような $u \in \mathrm{Ker}(f^m), \ w \in \mathrm{Im}(f^m)$
が存在するので、

$$
\begin{aligned}
V \subset \mathrm{Ker}(f^m) + \mathrm{Im}(f^m)
\ \ \ \ \left( = \left\{ u+w \mid
u \in \mathrm{Ker}(f^m), w \in \mathrm{Im}(f^m) \right\} \right)
\end{aligned}
$$

がわかる。

#### (ii)
$\mathrm{Ker}(f^m) \subset V, \ \mathrm{Im}(f^m) \subset V$ から

$$
\begin{aligned}
\mathrm{Ker}(f^m) + \mathrm{Im}(f^m) \subset V
\end{aligned}
$$

がわかる。

#### (iii)
$v \in V$ が
$v \in \mathrm{Ker}(f^m)$ かつ $v \in \mathrm{Im}(f^m)$
を満たすとすると、
$v \in \mathrm{Im}(f^m)$ より

$$
\begin{aligned}
v = f^m(v_0)
\end{aligned}
$$

を満たす $v_0 \in V$ が存在し、

$$
\begin{aligned}
v
&= f^m(v_0)
\\
&= f^n(v_0) \ \ \ \ \ \ \ \ ( \because f^n = f^m )
\\
&= f^{n-2m} \left( f^m (v) \right)
\\
&= f^{n-2m} (0) \ \ \ \ \ \ \ \ ( \because v \in \mathrm{Ker}(f^m) )
\\
&= 0
\end{aligned}
$$

を得る。
つまり、

$$
\begin{aligned}
\mathrm{Ker}(f^m) \cap \mathrm{Im}(f^m) = \left\{ 0 \right\}
\end{aligned}
$$

である。

#### (iv) 
(i), (ii) より、

$$
\begin{aligned}
V = \mathrm{Ker}(f^m) + \mathrm{Im}(f^m)
\end{aligned}
$$

がわかり、さらに (iii) より、

$$
\begin{aligned}
V = \mathrm{Ker}(f^m) \oplus \mathrm{Im}(f^m)
\end{aligned}
$$

がわかる。
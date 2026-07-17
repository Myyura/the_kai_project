---
sidebar_label: '2025年8月実施 数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Mobius-Transformation
  - Mathematics.Complex-Analysis.Laurent-Series
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Harmonic-Functions-and-Harmonic-Conjugates
---

# 東京大学 工学系研究科 2025年8月実施 数学 第3問

## **Author**
GPT-5.6 Sol

## **Description**

$z=x+iy$ とし、$x,y$ は実数、$i$ は虚数単位とする。

### I

$\cos z=10$ を満たすすべての $z$ について、$x,y$ を求めよ。

### II

$$
w=\frac{iz+1+2i}{z-i}
$$

とする。$z$ が $y>2$ の範囲を動くとき、$w$ が動く範囲を複素平面上に図示せよ。

### III

$$
f(z)=z^3e^{-1/z^2}
$$

について、次を求めよ。

1. $z=0$ における Laurent 展開。
2. $z=0$ における留数。
3. $I=\displaystyle\oint_{|z|=1}f(z)\,dz$。

### IV

正則関数 $g(z)=u(x,y)+iv(x,y)$ の実部が

$$
u=x^3-3xy^2+x^2-y^2+x
$$

であるとき、$v$ と $g(z)$ を求めよ。

## **Kai**

### I

$$
\cos(x+iy)=\cos x\cosh y-i\sin x\sinh y
$$

である。虚部が零でなければならないので、

$$
\sin x\sinh y=0.
$$

$y=0$ では $\cos x=10$ は不可能である。したがって $\sin x=0$、すなわち $x=k\pi$ である。実部の条件は

$$
(-1)^k\cosh y=10
$$

なので $k$ は偶数でなければならない。また

$$
\cosh y=10
\quad\Longleftrightarrow\quad
y=\pm\operatorname{arcosh}10
=\pm\log(10+\sqrt{99}).
$$

よって、

$$
\boxed{x=2m\pi,\qquad y=\pm\log(10+\sqrt{99})\quad(m\in\mathbb Z)}
$$

である。

### II

式を

$$
w=i+\frac{2i}{z-i}
$$

と変形する。$w=u+iv$ とおくと、

$$
z-i=\frac{2i}{w-i}
=\frac{2(v-1)+2iu}{u^2+(v-1)^2}.
$$

したがって、$\operatorname{Im}(z-i)=y-1$ より

$$
y-1=\frac{2u}{u^2+(v-1)^2}.
$$

$y>2$ は

$$
\frac{2u}{u^2+(v-1)^2}>1
$$

と同値であり、整理すると

$$
\boxed{(u-1)^2+(v-1)^2<1}
$$

を得る。すなわち、$w$ の範囲は中心 $1+i$、半径 $1$ の円の内部である。境界は含まない。

```text
             Im w
               ^
          (1,2) *
              .' '.
       (0,1) *  C  * (2,1)      C = 1+i
              '. .'
          (1,0) *
---------------+--------------------> Re w
               1
```

### III.1

指数関数を展開すると、

$$
\begin{aligned}
f(z)
&=z^3\sum_{n=0}^{\infty}\frac{(-1)^n}{n!z^{2n}}\\
&=\sum_{n=0}^{\infty}\frac{(-1)^n}{n!}z^{3-2n}\\
&=z^3-z+\frac{1}{2z}-\frac{1}{6z^3}+\frac{1}{24z^5}-\cdots.
\end{aligned}
$$

### III.2

$z^{-1}$ の係数は $n=2$ の項から生じるので、

$$
\boxed{\operatorname{Res}(f,0)=\frac12}
$$

である。

### III.3

$|z|=1$ の内部の特異点は $z=0$ のみである。留数定理より、

$$
\boxed{I=2\pi i\operatorname{Res}(f,0)=\pi i}
$$

となる。

### IV

与えられた実部は

$$
u=\operatorname{Re}(z^3+z^2+z)
$$

と書ける。したがって、その調和共役は実定数 $C$ を用いて

$$
\boxed{v=3x^2y-y^3+2xy+y+C}
$$

であり、正則関数は

$$
\boxed{g(z)=z^3+z^2+z+iC\qquad(C\in\mathbb R)}
$$

となる。

## **Reference**

- [東京大学大学院工学系研究科 2026年度大学院入学試験問題 数学](https://www.t.u-tokyo.ac.jp/hubfs/admission/2026/M_J_E_2026.pdf)

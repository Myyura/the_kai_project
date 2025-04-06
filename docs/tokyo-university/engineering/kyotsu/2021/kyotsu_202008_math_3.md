---
sidebar_label: '2020年8月実施 数学3'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2020年8月実施 数学3

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

2021年度大学院入学試験問題
[数学 3 (主に複素関数論)](https://github.com/Myyura/the_kai_project_assets/blob/7d274740e9aacde6948ee5ca73a336a00fe76d04/kakomonn/tokyo_university/engineering/Description/2021_M_3.pdf)


## **Kai**
### I.
#### 1.
$M(z)=z$ より

$$
\begin{aligned}
\frac{mz}{mz-z+1} & =z \\
\mathrm{mz} & =(mz-z+1)z \\
(m-1)z(z-1) & =0
\end{aligned}
$$

となる．よって，$m≠1$ であるから，$M(z)=z$ の不動点は

$$
z=0,1
$$

解説:
$M(z)=z$ を整理すると、$(m-1)z(z-1)=0$であり、 $m \ne 0$ なので、 $z=0,1$ を得る。
実際、 $M(0)=0, M(1)=1$ である。
一次分数変換の不動点を求める問題です．
不動点とはその名の通り動かない点です．変換を施しても変化しないということです．

#### 2.

$$
\begin{aligned}
\frac{dM(z)}{dz}
&= \frac{m(mz-z+1) - mz(m-1)}{(mz-z+1)^2}
\\
&= \frac{m}{(mz-z+1)^2}
\\
\therefore \ \ 
\frac{dM(0)}{dz} &= m
\end{aligned}
$$

#### 3.

### II.
$0$ でない複素数 $z$ を極形式で $z=re^{i \theta} \ \ (r \gt 0, 0 \leq \theta \lt 2 \pi)$
と表すと、

$$
\begin{aligned}
J(z)
&= e^{-i \alpha} z + e^{i \alpha} z^{-1}
\\
&= r e^{i (\theta - \alpha)} + \frac{1}{r} e^{-i (\theta - \alpha)}
\\
&= \left( r + \frac{1}{r} \right) \cos (\theta - \alpha) + i \left( r - \frac{1}{r} \right) \sin (\theta - \alpha)
\end{aligned}
$$

なので、これの虚部

$$
\begin{aligned}
\left( r - \frac{1}{r} \right) \sin (\theta - \alpha)
\end{aligned}
$$

が正となるのは、「 $r \gt 1$ かつ $\alpha \lt \theta \lt \alpha + \pi$」
または「$r \lt 1$ かつ $0 \lt \theta \lt \alpha, \alpha + \pi \lt \theta \lt 2 \pi$ 」
のときである。

### III.

[【院試解説】東京大学 工学系研究科 2021年度 数学3 III](https://www.youtube.com/watch?v=_xETmjbNKC4)
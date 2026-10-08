---
sidebar_label: "2017年8月実施 基礎科目 [1]"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Triple-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 京都大学 理学研究科 数学・数理解析専攻 2017年8月実施 基礎科目 [1]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

広義積分

$$
\iiint_V\frac{1}{(1+x^2+y^2)z^{3/2}}\,dx\,dy\,dz
$$

を計算せよ。ただし

$$
V=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2\le z\}
$$

とする。

#### 题目描述

计算反常三重积分

$$
\iiint_V\frac{dx\,dy\,dz}{(1+x^2+y^2)z^{3/2}},
\qquad
V=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2\le z\}.
$$

## **Kai**

被積分関数は非負なので、積分順序の交換には Tonelli の定理を用いることができる。円柱座標 $x=r\cos\theta,\ y=r\sin\theta$ により、

$$
\begin{aligned}
\iiint_V\frac{dx\,dy\,dz}{(1+x^2+y^2)z^{3/2}}
&=\int_0^{2\pi}\int_0^\infty
  \frac{r}{1+r^2}\left(\int_{r^2}^\infty z^{-3/2}\,dz\right)\,dr\,d\theta\\
&=2\pi\int_0^\infty\frac{r}{1+r^2}\frac{2}{r}\,dr\\
&=4\pi\left[\arctan r\right]_0^\infty\\
&=\boxed{2\pi^2}.
\end{aligned}
$$

内側の積分の計算は $r>0$ で行った。$r=0$ は零測度の集合であり、最後の積分が有限なので、もとの広義積分の収束も従う。

## **Reference**

- [京都大学公式問題（2018年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2017math_kiso.pdf)
- [照合用参考解答（H30-basic.pdf、PDF 1ページ）](https://drive.google.com/file/d/1cdRh94F0dh7hFNtDQU6I4yFQcgsSAyYB/view)

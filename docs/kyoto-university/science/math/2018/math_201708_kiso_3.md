---
sidebar_label: "2017年8月実施 基礎科目 [3]"
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
---

# 京都大学 理学研究科 数学・数理解析専攻 2017年8月実施 基礎科目 [3]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

広義積分

$$
\int_{-\infty}^{\infty}\frac{\cos(\pi x)}{1+x^2+x^4}\,dx
$$

を求めよ。

#### 题目描述

求反常积分

$$
\int_{-\infty}^{\infty}\frac{\cos(\pi x)}{1+x^2+x^4}\,dx.
$$

## **Kai**

実軸上の被積分関数は絶対可積分である。複素関数

$$
F(z)=\frac{e^{i\pi z}}{z^4+z^2+1}
$$

を考える。分母は $(z^2-z+1)(z^2+z+1)$ と因数分解され、上半平面の極は

$$
\alpha=\frac{1+i\sqrt3}{2},
\qquad
\beta=\frac{-1+i\sqrt3}{2}
$$

の二つの単純極である。$E=e^{-\sqrt3\pi/2}$ と置けば、

$$
\begin{aligned}
\operatorname{Res}(F;\alpha)
&=\frac{iE}{-3+i\sqrt3},\\
\operatorname{Res}(F;\beta)
&=\frac{-iE}{3+i\sqrt3}.
\end{aligned}
$$

したがって

$$
\operatorname{Res}(F;\alpha)+\operatorname{Res}(F;\beta)
=-\frac{iE}{2}.
$$

上半平面の半円弧 $\Gamma_R$ 上では $|e^{i\pi z}|\le1$ であるから、十分大きな $R$ に対して

$$
\left|\int_{\Gamma_R}F(z)\,dz\right|
\le\frac{\pi R}{R^4-R^2-1}\longrightarrow0.
$$

留数定理を適用すると

$$
\int_{-\infty}^{\infty}F(x)\,dx
=2\pi i\left(-\frac{iE}{2}\right)=\pi E.
$$

実部を取ることにより、

$$
\boxed{\int_{-\infty}^{\infty}\frac{\cos(\pi x)}{1+x^2+x^4}\,dx
=\pi e^{-\sqrt3\pi/2}}.
$$

## **Reference**

- [京都大学公式問題（2018年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2017math_kiso.pdf)
- [照合用参考解答（H30-basic.pdf、PDF 3–4ページ）](https://drive.google.com/file/d/1cdRh94F0dh7hFNtDQU6I4yFQcgsSAyYB/view)

---
sidebar_label: "2022年度 基礎科目 [5]"
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Mathematics.Real-Analysis.Dirichlet-Test-for-Improper-Integrals
---

# 京都大学 理学研究科 数学・数理解析専攻 2022年度 基礎科目 問題5

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

次の広義積分を求めよ。

$$
\int_{-\infty}^\infty\frac{x^3\sin x}{(x^2+1)^2}\,dx.
$$

#### 题目描述

计算反常积分

$$
\int_{-\infty}^\infty\frac{x^3\sin x}{(x^2+1)^2}\,dx.
$$

## **Kai**

$h(x)=x^3/(x^2+1)^2$ は $x>\sqrt3$ で単調減少し、$x\to\infty$ で $0$ に収束する。ディリクレの判定法と偶対称性により、求める広義積分は収束する。

上半平面で

$$
F(z)=\frac{z^3e^{iz}}{(z^2+1)^2}
$$

を考える。上半円上の積分はジョルダンの補題により $0$ に収束する。上半平面の極は $z=i$ の2位の極だけで、その留数は

$$
\operatorname{Res}_{z=i}F
=\left.\frac{d}{dz}\frac{z^3e^{iz}}{(z+i)^2}\right|_{z=i}
=\frac1{4e}.
$$

したがって留数定理の虚部を取ると

$$
\boxed{\int_{-\infty}^\infty\frac{x^3\sin x}{(x^2+1)^2}\,dx
=\frac{\pi}{2e}}.
$$

## **Reference**

- [京都大学公式問題（2022年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2021math_kiso_for2022_honshi.pdf)
- [照合用参考解答（R4-basic.pdf、PDF 5ページ）](https://drive.google.com/file/d/1wvo88HT16YKnB_J202zUhdYmK_hCK1pn/view)

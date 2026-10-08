---
sidebar_label: "2016年8月実施 基礎科目 [1]"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Double-Integral
---

# 京都大学 理学研究科 数学・数理解析専攻 2016年8月実施 基礎科目 [1]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

次の重積分を求めよ。

$$
\iint_D e^{-\max\{x^2,y^2\}}\,dx\,dy,
\qquad
D=\{(x,y)\in\mathbb R^2\mid 0\le x\le1,\ 0\le y\le1\}.
$$

#### 题目描述

计算二重积分

$$
\iint_D e^{-\max\{x^2,y^2\}}\,dx\,dy,
\qquad D=[0,1]\times[0,1].
$$

## **Kai**

被積分関数は $x,y$ について対称であり、対角線 $x=y$ の面積は $0$ である。三角形 $0\le y\le x\le1$ 上では $\max\{x^2,y^2\}=x^2$ だから、

$$
\begin{aligned}
\iint_D e^{-\max\{x^2,y^2\}}\,dx\,dy
&=2\int_0^1\int_0^x e^{-x^2}\,dy\,dx\\
&=2\int_0^1xe^{-x^2}\,dx\\
&=\left[-e^{-x^2}\right]_0^1
=\boxed{1-e^{-1}}.
\end{aligned}
$$

## **Reference**

- [京都大学公式問題（2017年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2016math_kiso.pdf)

- 照合用参考解答：[kmath-grad-answer：H29 基礎科目・問題1（PDF 1ページ）](https://drive.google.com/file/d/1RJ3cPCMYxorlM3itSeJSplPrldEYm1k3/view)

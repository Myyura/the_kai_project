---
sidebar_label: "2022年7月実施 前期募集 数学 問4"
tags:
  - Yamanashi-University
  - Mathematics.Calculus.Local-Extrema
---

# 山梨大学 医工農学総合教育部 工学専攻 機械工学コース 2022年7月実施 前期募集 数学 問4

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%B1%B1%E6%A2%A8%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E5%BE%AE%E5%88%86%E7%A9%8D%E5%88%86.html) refined with GPT 6 Astra)

## **Description**

問4　次の関数の極値を求めよ。

Problem 4　Find the extreme value of the following function.

$$
f(x)=\sin x+\frac13\sin3x\qquad(0\le x\le\pi)
$$

### 题目描述

问4　求下列函数的极值。

$$
f(x)=\sin x+\frac13\sin3x\qquad(0\le x\le\pi)
$$

## **Kai**

導関数は

$$
f'(x)=\cos x+\cos3x=2\cos x\cos2x.
$$

内部の停留点は $x=\pi/4,\pi/2,3\pi/4$ である。$f'$ の符号は順に $+,-,+,-$ と変わるので

$$
\boxed{\text{極大値 }\frac{2\sqrt2}{3}\quad
\left(x=\frac\pi4,\frac{3\pi}4\right)},
\qquad
\boxed{\text{極小値 }\frac23\quad\left(x=\frac\pi2\right)}.
$$

なお、閉区間全体の最大値は $2\sqrt2/3$、最小値は端点 $x=0,\pi$ における $0$ である。端点も定義域に対する片側の局所最小として数える場合には、この $0$ も含める。

## **Reference**

- [山梨大学公式問題（PDF 3頁）](https://www.yamanashi.ac.jp/wp-content/uploads/2016/01/R05M1_1TM.pdf)
- [Miyake：参考解答](https://miyake.github.io/exams/%E5%B1%B1%E6%A2%A8%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E5%BE%AE%E5%88%86%E7%A9%8D%E5%88%86.html)
- [山梨大学募集要項（試験日：25頁）](https://www.yamanashi.ac.jp/wp-content/uploads/2016/01/R05_mt_yoko_j.pdf)

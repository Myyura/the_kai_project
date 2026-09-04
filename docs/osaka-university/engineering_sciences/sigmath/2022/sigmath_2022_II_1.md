---
sidebar_label: "2022年度 数理科学 II [1]"
tags:
  - Osaka-University
  - Mathematics.Real-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 II \[1\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$\alpha,\beta\in\mathbb R$ とする。次の広義積分が収束するための必要十分条件を求めよ。

(1) $\int_0^\infty x^{-\alpha}(1+x)^{-\beta}\,dx$。

(2) $\int_0^\infty x^{-\alpha}(1+x)^{-\beta}\log(1+x)\,dx$。

## **Kai**

### (1)
$x\downarrow0$ で被積分関数は $x^{-\alpha}$ と同値、$x\to\infty$ で $x^{-\alpha-\beta}$ と同値。したがって

$$
\boxed{\alpha<1,\qquad\alpha+\beta>1}.
$$

### (2)
原点では $\log(1+x)\sim x$ なので $x^{1-\alpha}$ と比較し、条件は $\alpha<2$。

無限遠では $x^{-\alpha-\beta}\log x$ と比較する。この積分は $\alpha+\beta>1$ のときのみ収束する（等号でも発散）。ゆえに

$$
\boxed{\alpha<2,\qquad\alpha+\beta>1}.
$$

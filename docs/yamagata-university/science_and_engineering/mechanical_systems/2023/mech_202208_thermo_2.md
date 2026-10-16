---
sidebar_label: "2022年8月実施 熱力学 問2"
tags:
  - Yamagata-University
  - Physics.Thermodynamics
---

# 山形大学 理工学研究科 機械システム工学専攻 2022年8月実施 熱力学 問2

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%B1%B1%E5%BD%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%A9%9F%E6%A2%B0%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E7%86%B1%E5%8A%9B%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

開いた定常流動系において、質量 $m$ の理想気体を温度 $T_1$ の状態1から温度 $T_2$ の状態2へ可逆断熱膨張させる。定積比熱を $c_v$、定圧比熱を $c_p$、$T_1>T_2$ とする。

(1) 比熱比 $\kappa$ を $c_v,c_p$ で表せ。

(2) 気体が外部にした工業仕事 $W_b$ を求めよ。

#### 题目描述

在开口稳流系统中，质量为 $m$ 的理想气体从温度 $T_1$ 可逆绝热膨胀至 $T_2$，且 $T_1>T_2$。定容、定压比热分别为 $c_v,c_p$。

(1) 求比热比 $\kappa$；(2) 求气体对外输出的技术功 $W_b$。

## **Kai**

### (1)

$$
\boxed{\kappa=\frac{c_p}{c_v}}.
$$

### (2)

可逆な定常流の工業仕事は、比体積を $v$ とすると

$$
W_b=-m\int_{p_1}^{p_2}v\,dp.
$$

熱力学関係 $dh=T\,ds+v\,dp$ において可逆断熱変化では $ds=0$ なので、$dh=v\,dp$。理想気体では $dh=c_p\,dT$ であるから

$$
\boxed{W_b=m(h_1-h_2)=mc_p(T_1-T_2)}.
$$

開いた系の工業仕事には流動仕事が含まれるため、内部エネルギー差ではなくエンタルピー差を用いる。

## **Reference**

- [山形大学公式問題（PDF 5頁）](https://www.yz.yamagata-u.ac.jp/download_file/3158/227/)
- [Miyake：参考解答](https://miyake.github.io/exams/%E5%B1%B1%E5%BD%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%A9%9F%E6%A2%B0%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E7%86%B1%E5%8A%9B%E5%AD%A6.html)

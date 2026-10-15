---
sidebar_label: "2015年度 問1（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Diesel-Cycle
  - Physics.Thermodynamics.Polytropic-Process
---

# 九州大学 工学府 機械系専攻 2015年度 熱工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

理想気体を作動流体とする可逆サイクルを考える。$1\to2$ は断熱圧縮、$2\to3$ は等圧加熱、$3\to4$ はポリトロープ膨張、$4\to1$ は等積放熱である。気体定数を $R$、一定の比熱比を $\kappa$ とする。状態 1 の温度、比体積を $T_1,v_1$ とし、$v_1/v_2=\varepsilon$、$v_3/v_2=\sigma$、$1<\sigma<\varepsilon$ とする。ポリトロープ指数は $1<n<\kappa$ である。加熱を正として、$T_1,\varepsilon,\sigma,R,\kappa,n$ の必要なものを用いて答えよ。（55 点）

1. 単位質量当たりの加熱量 $q_{23}$ を求めよ。
2. 単位質量当たりの絶対仕事 $l_{34}$ と熱量 $q_{34}$ を求め、加熱・放熱のいずれかを示せ。
3. 単位質量当たりの熱量 $q_{41}$ を求めよ。
4. サイクルの単位質量当たりの絶対仕事 $l$ を求めよ。
5. 状態 1、2、3 を変えず、$3\to4$ を断熱膨張 $3\to4'$ に置き換え、$4'\to1$ を等積放熱としたサイクルの熱効率を求めよ。

#### 题目描述

理想气体经历可逆绝热压缩、等压加热、多变膨胀及等容放热。压缩比 $\varepsilon=v_1/v_2$，截断比 $\sigma=v_3/v_2$，$1<\sigma<\varepsilon$，多变指数 $1<n<\kappa$。求各指定过程的热量、多变膨胀功、循环净功，以及将多变膨胀改为绝热膨胀后的热效率。吸热为正，答案使用题给参数。

## **Kai**

比熱と各状態の温度は

$$
c_v=\frac{R}{\kappa-1},\qquad c_p=\frac{\kappa R}{\kappa-1},\qquad
T_2=T_1\varepsilon^{\kappa-1},\quad
T_3=T_1\sigma\varepsilon^{\kappa-1},\quad
T_4=T_1\sigma^n\varepsilon^{\kappa-n}.
$$

### (1)

$$
\boxed{q_{23}=c_p(T_3-T_2)=\frac{\kappa RT_1}{\kappa-1}\varepsilon^{\kappa-1}(\sigma-1).}
$$

### (2)

$p v^n=\text{一定}$ を積分すると

$$
\boxed{l_{34}=\frac{R(T_3-T_4)}{n-1}
=\frac{RT_1}{n-1}\left(\sigma\varepsilon^{\kappa-1}-\sigma^n\varepsilon^{\kappa-n}\right).}
$$

第一法則より

$$
\boxed{q_{34}=c_v(T_4-T_3)+l_{34}
=\frac{RT_1(\kappa-n)}{(\kappa-1)(n-1)}
\left(\sigma\varepsilon^{\kappa-1}-\sigma^n\varepsilon^{\kappa-n}\right).}
$$

$T_4/T_3=(\sigma/\varepsilon)^{n-1}<1$、$\kappa>n$ より $q_{34}>0$、したがって**加熱過程**である。

### (3)

$$
\boxed{q_{41}=c_v(T_1-T_4)=\frac{RT_1}{\kappa-1}
\left(1-\sigma^n\varepsilon^{\kappa-n}\right)<0.}
$$

### (4)

一周の内部エネルギー変化はゼロ、$q_{12}=0$ なので

$$
\boxed{l=\frac{RT_1}{\kappa-1}\left[
\kappa\varepsilon^{\kappa-1}(\sigma-1)
+\frac{\kappa-n}{n-1}\left(\sigma\varepsilon^{\kappa-1}-\sigma^n\varepsilon^{\kappa-n}\right)
+1-\sigma^n\varepsilon^{\kappa-n}\right].}
$$

### (5)

断熱膨張後の温度は $T_{4'}=T_3(\sigma/\varepsilon)^{\kappa-1}=T_1\sigma^\kappa$。よって

$$
\boxed{\eta=1-\frac{c_v(T_{4'}-T_1)}{c_p(T_3-T_2)}
=1-\frac{\sigma^\kappa-1}{\kappa\varepsilon^{\kappa-1}(\sigma-1)}.}
$$

---
sidebar_label: "2011年8月実施 問1（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Otto-Cycle
  - Physics.Thermodynamics.Entropy
---

# 九州大学 工学府 機械系専攻 2011年8月実施 熱工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

理論オットーサイクルの $p$–$v$ 線図を下図に示す。作動ガスは温度によらず比熱一定の理想気体、比熱比を $\kappa$ とする。状態1、2における圧力を $p_1,p_2$、比容積を $v_1,v_2$ とする。（70点）

![公式原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_thermo-1-original.png)

1. 可逆断熱圧縮 $1\to2$ における単位質量あたりの仕事 $l_{12}$ を、$p_1,v_1,v_2,\kappa$ のみで表せ。（10点）
2. 等積加熱 $2\to3$ の単位質量あたりの加熱量が $q$ のとき、$p_3$ を $p_1,v_1,v_2,\kappa,q$ で表せ。（10点）
3. 断熱膨張 $3\to4$ の単位質量あたりの仕事 $l_{34}$ を $p_1,v_1,v_2,\kappa,q$ で表せ。また、サイクルの単位質量あたりの正味仕事と熱効率 $\eta$ を求めよ。（25点）
4. 温度を $T$、単位質量あたりのエントロピーを $s$ として、このサイクルの $T$–$s$ 線図を描け。（10点）
5. 状態3から圧力が $p_1$ に等しくなるまで断熱膨張し、その後、等圧過程で状態1に戻るように変更すると、熱効率は元のサイクルと比較してどうなるか。理由も説明せよ。（15点）

#### 题目描述

对理想 Otto 循环计算压缩功、加热后压力、膨胀功、净功和效率，画 $T$–$s$ 图，并比较扩大膨胀至初压后定压回程的效率。功取气体对外做功为正。

## **Kai**

気体が外部にする仕事を正とする。圧縮比を $\varepsilon=v_1/v_2>1$ とおく。

### (1)

可逆断熱関係 $pv^\kappa=p_1v_1^\kappa$ より

$$
\boxed{l_{12}=\int_{v_1}^{v_2}p\,dv
=\frac{p_1v_1}{\kappa-1}\left[1-\left(\frac{v_1}{v_2}\right)^{\kappa-1}\right]<0}.
$$

### (2)

等積過程で $q=c_v(T_3-T_2)=(p_3-p_2)v_2/(\kappa-1)$。したがって

$$
\boxed{p_3=p_1\left(\frac{v_1}{v_2}\right)^\kappa+\frac{(\kappa-1)q}{v_2}}.
$$

### (3)

$v_4=v_1$、$p_4=p_3(v_2/v_1)^\kappa$ より

$$
\begin{aligned}
l_{34}&=\frac{p_3v_2-p_4v_1}{\kappa-1}\\
&=\boxed{\frac{p_1v_1}{\kappa-1}
\left[\left(\frac{v_1}{v_2}\right)^{\kappa-1}-1\right]
+q\left[1-\left(\frac{v_2}{v_1}\right)^{\kappa-1}\right]}.
\end{aligned}
$$

等積過程の仕事は零なので

$$
\boxed{l_{\mathrm{net}}=q\left[1-\left(\frac{v_2}{v_1}\right)^{\kappa-1}\right],\qquad
\eta=1-\left(\frac{v_2}{v_1}\right)^{\kappa-1}}.
$$

### (4)

断熱過程では $s_2=s_1$、$s_4=s_3$ である。等積過程では $ds=c_vdT/T$ より $T\propto e^{s/c_v}$。したがって $1\to2$ と $3\to4$ は縦線、$2\to3$ と $4\to1$ は図の曲線となる。

![OttoサイクルのT–s線図と膨張延長](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_thermo-1-answer.svg)

### (5)

変更後の膨張終点を $4'$ とする。$q>0$ なので $p_4>p_1$、従って $v_{4'}>v_1$。加熱過程 $2\to3$ は同じで、投入熱量は $q$ のままである。一方、右図の着色面積だけ正味仕事が増える。

$$
\Delta l=\int_{v_1}^{v_{4'}}\{p_3(v_2/v)^\kappa-p_1\}\,dv>0.
$$

したがって $\boxed{\eta_{\mathrm{new}}=\eta+\Delta l/q>\eta}$。追加の膨張で得る仕事が、それに伴う等圧圧縮の仕事を上回るためである。

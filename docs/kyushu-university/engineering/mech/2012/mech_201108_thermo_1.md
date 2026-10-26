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

理論オットーサイクルがあり，作動ガスの圧力を $p$，比容積を $v$ とするときの $p$–$v$ 線図が図に示されている。このとき，以下の問いに答えよ。ただし，作動ガスは温度によらず比熱が一定の理想気体とし，その比熱比を $\kappa$ とする。また，図中の状態1，2における圧力を $p_1,p_2$，比容積を $v_1,v_2$ とする。（70点）

**1)** 可逆断熱圧縮過程 $1\to2$ における作動ガス単位質量あたりの仕事 $l_{12}$ を，$p_1,v_1,v_2,\kappa$ のみを用いて表せ。（10点）

**2)** 等積加熱過程 $2\to3$ における作動ガス単位質量あたりの加熱量が $q$ のとき，状態3における圧力 $p_3$ を，$p_1,v_1,v_2,\kappa,q$ を用いて表せ。（10点）

**3)** 断熱膨張過程 $3\to4$ における作動ガス単位質量あたりの仕事 $l_{34}$ を，$p_1,v_1,v_2,\kappa,q$ を用いて表せ。また，このサイクルの作動ガス単位質量あたりの正味仕事および熱効率 $\eta$ を求めよ。（25点）

**4)** 作動ガスの温度を $T$，単位質量あたりのエントロピーを $s$ とするとき，このサイクルの $T$–$s$ 線図を描け。（10点）

**5)** つぎに，このサイクルの状態3から状態4までの断熱膨張過程と状態4から状態1までの等積冷却過程を変更し，状態3からの断熱膨張過程を状態4までではなく状態1の圧力と等しくなるまで行い，その後，等圧過程により状態1に戻るサイクルとすると，熱効率はもとのオットーサイクルと比較してどうなるか答えよ。またその理由を説明せよ。（15点）

![原題の図：理論オットーサイクルのp–v線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_thermo-1-original.png)

### 题目描述

某理想奥托循环的 $p$–$v$ 图如图所示，其中 $p$ 为工质气体的压力，$v$ 为比体积。回答下列问题。工质为比热不随温度变化的理想气体，比热比为 $\kappa$。图中状态1、2的压力分别为 $p_1,p_2$，比体积分别为 $v_1,v_2$。（70分）

**1)** 仅用 $p_1,v_1,v_2,\kappa$ 表示可逆绝热压缩过程 $1\to2$ 中单位质量工质的功 $l_{12}$。（10分）

**2)** 等容加热过程 $2\to3$ 中，单位质量工质的吸热量为 $q$。用 $p_1,v_1,v_2,\kappa,q$ 表示状态3的压力 $p_3$。（10分）

**3)** 用 $p_1,v_1,v_2,\kappa,q$ 表示绝热膨胀过程 $3\to4$ 中单位质量工质的功 $l_{34}$，并求循环的单位质量净功与热效率 $\eta$。（25分）

**4)** 以 $T$ 表示工质温度，$s$ 表示单位质量熵，画出该循环的 $T$–$s$ 图。（10分）

**5)** 改变原循环中状态3至4的绝热膨胀过程和状态4至1的等容冷却过程：由状态3开始绝热膨胀，不在状态4停止，而是继续至压力等于状态1的压力，再经等压过程回到状态1。该循环的热效率与原奥托循环相比如何变化？说明理由。（15分）

## **Kai**

気体が外部にする仕事を正とする。圧縮比を $\varepsilon=v_1/v_2>1$ とおく。

### (1)

可逆断熱関係 $pv^\kappa=p_1v_1^\kappa$ より

$$
\boxed{\begin{gathered}
l_{12}=\int_{v_1}^{v_2}p\,dv\\
=\frac{p_1v_1}{\kappa-1}\left[1-\left(\frac{v_1}{v_2}\right)^{\kappa-1}\right]<0
\end{gathered}}.
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
\boxed{\begin{gathered}
l_{\mathrm{net}}=q\left[1-\left(\frac{v_2}{v_1}\right)^{\kappa-1}\right],\\
\eta=1-\left(\frac{v_2}{v_1}\right)^{\kappa-1}
\end{gathered}}.
$$

### (4)

断熱過程では $s_2=s_1$、$s_4=s_3$ である。等積過程では $ds=c_vdT/T$ より $T\propto e^{s/c_v}$。したがって $1\to2$ と $3\to4$ は縦線、$2\to3$ と $4\to1$ は図の曲線となる。

![解答図 1（既存図の局部表示）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_thermo_1_answer_layout_1.svg)

![解答図 2（既存図の局部表示）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_thermo_1_answer_layout_2.svg)

### (5)

変更後の膨張終点を $4'$ とする。$q>0$ なので $p_4>p_1$、従って $v_{4'}>v_1$。加熱過程 $2\to3$ は同じで、投入熱量は $q$ のままである。一方、右図の着色面積だけ正味仕事が増える。

$$
\Delta l=\int_{v_1}^{v_{4'}}\{p_3(v_2/v)^\kappa-p_1\}\,dv>0.
$$

したがって $\boxed{\eta_{\mathrm{new}}=\eta+\Delta l/q>\eta}$。追加の膨張で得る仕事が、それに伴う等圧圧縮の仕事を上回るためである。

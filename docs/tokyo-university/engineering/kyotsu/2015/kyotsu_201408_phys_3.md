---
sidebar_label: '2014年8月実施 物理学 第3問'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Ideal-Gas-Entropy-and-Heat-Capacities
  - Physics.Thermodynamics.Ideal-Gas-Free-Expansion
  - Physics.Thermodynamics.Van-der-Waals-Gas
---

# 東京大学 工学系研究科 2014年8月実施 物理学 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

気体が様々な条件で膨張する過程について考える。1 モルあたりの内部エネルギーおよび体積をそれぞれ $U,V$、絶対温度を $T$、圧力を $p$、気体定数を $R$ とする。また、モル定積比熱を $C_V$、モル定圧比熱を $C_P$ とし、これらは条件に依らず一定値をとるものとする。

### I

理想気体では以下の関係式が成立することを示せ。

$$
C_P-C_V=R. \tag{1}
$$

### II

圧力 $p_0$、体積 $V_0$ のある理想気体の準静的断熱膨張過程、または準静的等温膨張過程を考える。これら二つの過程における $p$ と $V$ の関係（断熱線、および等温線）を、違いが明確になるように模式的に図示せよ。なお、準静的断熱膨張過程では、以下のポアソンの式が成り立つ。

$$
pV^{C_P/C_V}=\text{一定}. \tag{2}
$$

### III

理想気体が真空空間に対して断熱的に自由膨張する過程を考える。このとき、膨張過程前後において気体の温度が同一であることを説明せよ。また、これが不可逆過程であることを示せ。

### IV

温度 $T_1$、体積 $V_1$ のある理想気体を以下の二つの過程 A または B で膨張させる。

- 過程 A：この気体を体積 $V_2$ まで断熱自由膨張させて平衡に達した後に、さらに体積 $V_3$ まで準静的に断熱膨張させる。
- 過程 B：この気体を体積 $V_2$ まで準静的に断熱膨張させた後に、さらに体積 $V_3$ まで断熱自由膨張させる。

このとき最終的な気体の温度が同じになった。$V_1,V_2,V_3$ の間に成り立つ関係式を導け。

### V

状態方程式

$$
\left(p+\frac{a}{V^2}\right)(V-b)=RT
$$

に従うファン・デル・ワールス気体の断熱自由膨張過程について考える。ここで $a,b$ は気体固有の正の定数である。体積 $V_4$ の状態にある気体が、体積が $V_5$ となるまで断熱自由膨張した際の温度変化量 $\Delta T$ を、$V_4,V_5,R,a,b,C_V$ のうち必要なものを用いて表せ。また、この温度変化が生じる理由をファン・デル・ワールス気体の性質から説明せよ。なお、必要に応じて以下の関係式を用いてもよい。

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial p}{\partial T}\right)_V-p. \tag{3}
$$

#### 题目描述

考虑气体在不同条件下的膨胀过程。用 $U,V$ 分别表示每摩尔内能和体积，$T$ 表示绝对温度，$p$ 表示压强，$R$ 表示气体常数。摩尔定容热容为 $C_V$，摩尔定压热容为 $C_P$，均视为不随条件变化的常数。

I. 证明理想气体满足

$$
C_P-C_V=R.
$$

II. 考虑理想气体从压强 $p_0$、体积 $V_0$ 的状态开始，分别进行准静态绝热膨胀或准静态等温膨胀。在 $p$–$V$ 图中画出这两个过程的示意曲线，清楚体现绝热线与等温线的区别。准静态绝热膨胀满足泊松关系

$$
pV^{C_P/C_V}=\text{常数}.
$$

III. 理想气体向真空绝热自由膨胀。说明膨胀前后气体温度相同，并证明该过程不可逆。

IV. 使初始温度为 $T_1$、体积为 $V_1$ 的理想气体分别经历以下两种膨胀过程：

- 过程 A：先绝热自由膨胀至体积 $V_2$，达到平衡后，再准静态绝热膨胀至体积 $V_3$。
- 过程 B：先准静态绝热膨胀至体积 $V_2$，再绝热自由膨胀至体积 $V_3$。

已知两种过程的最终温度相同，推导 $V_1,V_2,V_3$ 之间的关系。

V. 考虑满足状态方程

$$
\left(p+\frac{a}{V^2}\right)(V-b)=RT
$$

的范德瓦尔斯气体的绝热自由膨胀，其中 $a,b$ 为该气体固有的正常数。气体从体积 $V_4$ 绝热自由膨胀至体积 $V_5$，求其温度变化量 $\Delta T$，用 $V_4,V_5,R,a,b,C_V$ 中必要的量表示。并根据范德瓦尔斯气体的性质解释温度变化的原因。必要时可以使用

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial p}{\partial T}\right)_V-p.
$$

## **Kai**

### I

理想気体では $pV=RT$ なので、式 (3) より $(\partial U/\partial V)_T=0$、したがって $dU=C_VdT$。定圧過程に第一法則を適用すると

$$
C_PdT=dU+p\,dV=C_VdT+R\,dT,
\qquad \boxed{C_P-C_V=R}.
$$

### II

$\gamma=C_P/C_V=1+R/C_V>1$ とおけば、各曲線は

$$
\boxed{p_{\mathrm{iso}}=p_0\frac{V_0}{V}},
\qquad
\boxed{p_{\mathrm{ad}}=p_0\left(\frac{V_0}{V}\right)^\gamma}.
$$

両者は $(V_0,p_0)$ を通り、膨張側 $V>V_0$ では $p_{\mathrm{ad}}<p_{\mathrm{iso}}$。始点での傾きはそれぞれ $-p_0/V_0$、$-\gamma p_0/V_0$ となり、断熱線の方が急である。

![同じ初期状態からの等温膨張と準静的断熱膨張](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2015/kyotsu_201408_phys_3_pv_audited.svg)

### III

断熱なので $Q=0$、真空への膨張なので外界への仕事も $W=0$。第一法則から

$$
\Delta U=Q-W=0=C_V(T_f-T_i),
\qquad \boxed{T_f=T_i}.
$$

エントロピーは状態量なので、同じ始終状態を結ぶ可逆等温膨張によって計算する。$V_f>V_i$ より

$$
\Delta S=\int_{V_i}^{V_f}\frac{p\,dV}{T}
=\boxed{R\log\frac{V_f}{V_i}>0}.
$$

外界のエントロピー変化はなく、全エントロピーが増加するため不可逆である。

### IV

自由膨張では温度が変わらず、準静的断熱膨張では $TV^{\gamma-1}$ が一定である。したがって、過程 A、B の最終温度は

$$
T_A=T_1\left(\frac{V_2}{V_3}\right)^{\gamma-1},
\qquad
T_B=T_1\left(\frac{V_1}{V_2}\right)^{\gamma-1}.
$$

$T_A=T_B$、$\gamma-1>0$ より $V_2/V_3=V_1/V_2$、すなわち

$$
\boxed{V_2^2=V_1V_3}.
$$

### V

状態方程式を $p=RT/(V-b)-a/V^2$ と書き、式 (3) を用いると

$$
\left(\frac{\partial U}{\partial V}\right)_T
=\frac{RT}{V-b}-\left(\frac{RT}{V-b}-\frac{a}{V^2}\right)
=\frac{a}{V^2}.
$$

よって $dU=C_VdT+(a/V^2)dV$。断熱自由膨張では $\Delta U=0$ だから

$$
0=C_V\Delta T+a\left(\frac1{V_4}-\frac1{V_5}\right),
\qquad
\boxed{\Delta T=\frac{a}{C_V}\left(\frac1{V_5}-\frac1{V_4}\right)<0}.
$$

分子間に引力が働くため、膨張して分子間距離が増すと相互作用の位置エネルギーが増加する。内部エネルギーは保存されるので、熱運動のエネルギーが減少し、温度が下がる。


---
sidebar_label: "2022年8月実施 専門科目2 問題I"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Van-der-Waals-Gas
  - Physics.Thermodynamics.Irreversible-Processes
  - Physics.Thermodynamics.Entropy
---

# 京都大学 工学研究科 化学工学専攻 2022年8月実施 専門科目2 問題I

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%8C%96%E5%AD%A6%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_2_1.html) refined with GPT 6 Astra)

## **Description**

図1に示すように、断熱壁で覆われた容積 $V_2$ の容器内に断熱の仕切板があり、空間1と空間2に区切られている。空間1の容積は $V_1$ で、$N_1\ \mathrm{mol}$ の気体が封入され、空間2は真空である。平衡状態での空間1の温度は $T_1$ であり、これを状態 $\alpha$ とする。

![図1 状態α](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/engineering/chemical-engineering/2023/kyoto_chemeng_202208_special2_1_fig1.png)

状態 $\alpha$ から、気体に力を及ぼさないように仕切板を引き抜いて気体を膨張させると、やがて温度 $T_2$ の平衡状態 $\beta$ に達した。気体は次の van der Waals 状態方程式に従う。

$$
\left(P+\frac{aN^2}{V^2}\right)(V-bN)=NRT.\tag{1}
$$

$P,V,N,R,T$ は圧力、体積、物質量、気体定数、温度であり、$a,b$ は正の定数である。仕切板の体積は無視でき、この操作で相変化は起こらない。

問1　状態 $\alpha$ から $\beta$ への変化で気体が吸収した熱量 $Q$ と、容器内の内部エネルギー変化 $\Delta U$ を求めよ。

問2　次式を用い、温度変化 $\Delta T=T_2-T_1$ を $V_1,V_2,N_1,a$、定容モル熱容量 $C_{\mathrm{v,m}}$ で表せ。$C_{\mathrm{v,m}}$ は定数とみなしてよい。

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial P}{\partial T}\right)_V-P.\tag{2}
$$

問3　$(\partial S/\partial V)_U$ を評価することで、この変化が不可逆過程であることを示せ。

問4　エントロピー変化 $\Delta S$ を求めよ。

問5　気体が理想気体である場合に同じ操作で生じる温度変化 $\Delta T'$ を $\Delta T$ と比較し、その違いの原因を両気体の性質に基づいて説明せよ。

#### 题目描述

一个体积为 $V_2$ 的绝热容器被绝热隔板分成两室。第一室体积为 $V_1$，装有 $N_1\ \mathrm{mol}$、温度为 $T_1$ 的气体；第二室体积为 $V_2-V_1$，为真空。此平衡状态记为 $\alpha$。不对气体施力地抽掉隔板，气体自由膨胀，最终达到温度 $T_2$ 的平衡状态 $\beta$。

气体满足范德瓦耳斯方程 $(P+aN^2/V^2)(V-bN)=NRT$，其中 $a,b>0$。忽略隔板体积，过程不发生相变。

问1：求吸热量 $Q$ 和内部能变化 $\Delta U$。

问2：利用 $(\partial U/\partial V)_T=T(\partial P/\partial T)_V-P$，用 $V_1,V_2,N_1,a$ 和恒定的定容摩尔热容 $C_{\mathrm{v,m}}$ 表示 $\Delta T=T_2-T_1$。

问3：通过计算 $(\partial S/\partial V)_U$ 证明该过程不可逆。

问4：求熵变 $\Delta S$。

问5：比较理想气体在相同操作下的温度变化 $\Delta T'$ 与上述 $\Delta T$，并从两种气体的性质解释差别。

## **Kai**

### 問1

容器は断熱され、真空に向かう自由膨張なので外部への仕事もない。したがって

$$
\boxed{Q=0,\qquad\Delta U=Q-W=0}.
$$

### 問2

物質量は $N_1$ に固定される。状態方程式と式 (2) より

$$
\left(\frac{\partial U}{\partial V}\right)_T
=\frac{aN_1^2}{V^2}.
$$

系全体の定容熱容量は $N_1C_{\mathrm{v,m}}$ なので

$$
dU=N_1C_{\mathrm{v,m}}\,dT+\frac{aN_1^2}{V^2}\,dV.
$$

両端の内部エネルギーが等しいことから

$$
0=N_1C_{\mathrm{v,m}}(T_2-T_1)
+aN_1^2\left(\frac1{V_1}-\frac1{V_2}\right).
$$

よって

$$
\boxed{\Delta T=-\frac{aN_1}{C_{\mathrm{v,m}}}
\left(\frac1{V_1}-\frac1{V_2}\right)<0}.
$$

### 問3

平衡状態間の基本関係 $dU=T\,dS-P\,dV$ から

$$
\boxed{\left(\frac{\partial S}{\partial V}\right)_U=\frac PT>0}.
$$

正の圧力、温度をもつ気体の状態範囲では、内部エネルギー一定のまま体積が増加するとエントロピーは増加する。容器は孤立しているため、この $\Delta S>0$ は内部でのエントロピー生成を表し、過程は不可逆である。

### 問4

状態関数の微分を用いて

$$
dS=\frac{dU+P\,dV}{T}
=N_1C_{\mathrm{v,m}}\frac{dT}{T}
+\frac{N_1R}{V-bN_1}\,dV.
$$

したがって

$$
\boxed{\Delta S=N_1C_{\mathrm{v,m}}\ln\frac{T_2}{T_1}
+N_1R\ln\frac{V_2-bN_1}{V_1-bN_1}},
$$

ただし

$$
T_2=T_1-\frac{aN_1}{C_{\mathrm{v,m}}}
\left(\frac1{V_1}-\frac1{V_2}\right).
$$

実際の自由膨張中に一様な圧力や温度を仮定する必要はなく、上式は両端の平衡状態から求めたものである。

### 問5

理想気体では $U$ は温度だけの関数なので、$\Delta U=0$ から

$$
\boxed{\Delta T'=0>\Delta T}.
$$

理想気体には分子間相互作用による内部エネルギーがない。一方、van der Waals 気体では分子間引力があり、膨張により分子間距離が増すと相互作用のポテンシャルエネルギーが増加する。全内部エネルギーが一定なので熱運動のエネルギーが減少し、温度が下がる。

## **Reference**

- [京都大学公式問題：2023年度化学工学専攻、専門科目2問題I（PDF 15ページ、2022年8月22日実施）](https://www.ch.t.kyoto-u.ac.jp/ja/admission/exam/2023-master-exam)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%8C%96%E5%AD%A6%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_2_1.html)

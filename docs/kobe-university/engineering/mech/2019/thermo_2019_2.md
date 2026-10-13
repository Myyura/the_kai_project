---
sidebar_label: "熱力学 第2問"
tags:
  - Kobe-University
  - Physics.Thermodynamics.Steady-Flow-Energy-Equation
  - Physics.Thermodynamics.Irreversible-Processes
---

# 神戸大学 工学研究科 機械工学専攻 2019年度 熱力学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

周囲環境 $(T_0,P_0)$ と平衡な理想気体（気体定数 $R$、比熱比 $\kappa$）を、温度 $T_0$、高圧 $P_S>P_0$、質量流量 $m\ \mathrm{kg/s}$ で供給する。圧縮機とタービンは可逆断熱、外界への熱損失と流路の圧力損失は無視する。

1. 熱交換器を通る気体の温度 $T$ と比エントロピー $s$ の関係を導け。
2. 図の(a)熱交換器、(b)圧縮機、(c)タービンのうち2要素を用い、システムのフローを描け。
3. 気体の状態変化を $T$–$S$、$P$–$V$ 線図に描け。$S$ はエントロピー、$V$ は体積とする。
4. 必要動力 $\dot W$ を $m,R,\kappa,T_0,P_0,P_S$ で表せ。
5. 熱交換量 $\dot Q$ を同じ記号で表せ。
6. 圧縮機・タービンが不可逆断熱の場合の $T$–$S$ 線図を描き、可逆の場合との温度・エネルギーの違いを述べよ。

![選択可能な熱交換器・圧縮機・タービン](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kobe-university/engineering/mech/2019/kobe2019_thermo2_components.svg)

#### 题目描述

将环境状态 $(T_0,P_0)$ 的理想气体，以温度 $T_0$、压力 $P_S>P_0$ 和质量流量 $m$ 供给。给定 $R,\kappa$，压缩机、涡轮为可逆绝热，忽略外界漏热和流路压损。（1）推导换热器内 $T,s$ 关系；（2）在换热器、压缩机、涡轮中选两种设备画流程；（3）画 $T$–$S$、$P$–$V$ 图；（4）（5）求动力和换热量；（6）画不可逆绝热压缩／膨胀图并比较出口温度及能量。

## **Kai**

$c_p=\kappa R/(\kappa-1)$、$a=(\kappa-1)/\kappa$ とおく。入口を状態1、圧縮機出口を状態2、供給状態を3とする。

### (1)

熱交換器内は圧力一定なので $Tds=dh-vdp=c_p\,dT$。よって


$$
\boxed{s-s_{\mathrm{ref}}=c_p\log\frac{T}{T_{\mathrm{ref}}}}\quad\text{（同一圧力上の基準点）}.
$$


特に周囲の比エントロピーを $s_0$ とすれば、圧力 $P_S$ において


$$
s-s_0=c_p\log\frac{T}{T_0}-R\log\frac{P_S}{P_0},
$$



$$
\boxed{T=T_0\left(\frac{P_S}{P_0}\right)^a\exp\left(\frac{s-s_0}{c_p}\right)}.
$$


### (2)

**圧縮機→熱交換器**の順とする。圧縮で圧力と温度を上げ、熱交換器で冷却流体へ熱を渡して $T_0$ に戻す。熱交換器内の二流体間の熱交換は、外界への熱損失とは区別する。

![圧縮機と後冷却器による供給フロー](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kobe-university/engineering/mech/2019/kobe2019_thermo2_flow.svg)

### (3)

可逆断熱圧縮から


$$
T_2=T_0\left(\frac{P_S}{P_0}\right)^a,\qquad s_2=s_1=s_0.
$$


等圧冷却の終点は $T_3=T_0$、$s_3=s_0-R\log(P_S/P_0)$。一定量の気体を取った $T$–$S$ 図では1→2が鉛直上向き、2→3が高圧等圧線に沿う左下向きとなる。$P$–$V$ 図では1→2が $PV^\kappa=\text{一定}$、2→3が $P=P_S$ の水平左向きである。

![可逆圧縮と等圧冷却の状態図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kobe-university/engineering/mech/2019/kobe2019_thermo2_states.svg)

### (4), (5)

圧縮機への入力はエンタルピー増加より


$$
\boxed{\dot W=m c_p(T_2-T_0)=\frac{\kappa}{\kappa-1}mRT_0\left[\left(\frac{P_S}{P_0}\right)^a-1\right]}.
$$


気体から冷却流体へ渡す熱を正として


$$
\boxed{\dot Q=m c_p(T_2-T_3)=\frac{\kappa}{\kappa-1}mRT_0\left[\left(\frac{P_S}{P_0}\right)^a-1\right]=\dot W}.
$$


全体の入口と出口で温度が等しく、理想気体のエンタルピー差はゼロである。

### (6)

![不可逆断熱圧縮と膨張の終点比較。破線は過程の模式表示](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kobe-university/engineering/mech/2019/kobe2019_thermo2_irreversible.svg)

断熱でも不可逆性があればエントロピーが増加する。同じ入口・出口圧力を比べると、圧縮機の実際の出口2′は、可逆出口2より同じ $P_S$ の等圧線上で右上に位置する。従って $T_{2'}>T_2$、必要動力と後冷却器の熱交換量はともに増す。

圧縮機効率 $\eta_c=(T_2-T_0)/(T_{2'}-T_0)<1$ を用いれば


$$
\boxed{\dot W'=\frac{\dot W}{\eta_c},\qquad\dot Q'=\dot W'}.
$$


供給温度は後冷却によって $T_0$ のまま保たれる。タービンの場合も、同じ入口・出口圧力なら不可逆出口の温度は可逆出口より高い。そのため取り出せる仕事 $m c_p(T_{\mathrm{in}}-T_{\mathrm{out}})$ は減少する。不可逆過程の途中状態は一意には定まらないので、図の破線は終点を結ぶ模式線である。

## **Reference**

- [神戸大学公式問題の保存版：平成31年度 熱力学、PDF 2ページ](https://web.archive.org/web/20220524073525id_/http://www.mech.kobe-u.ac.jp/wp-content/uploads/2017/06/4_H31_Thermo.pdf)

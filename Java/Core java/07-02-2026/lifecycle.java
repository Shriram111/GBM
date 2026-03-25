// Source code is decompiled from a .class file using FernFlower decompiler (from Intellij IDEA).
class LifeCycleDemo extends Thread {
    LifeCycleDemo() {
    }
 
    public void run() {
       System.out.println("Thread is running");
    }
}
 
    public class lifecycle{
    public static void main(String[] var0) {
       LifeCycleDemo var1 = new LifeCycleDemo();
       System.out.println("State after creation: " + String.valueOf(var1.getState()));
       var1.start();
       System.out.println("State after start: " + String.valueOf(var1.getState()));
    }
 }
 

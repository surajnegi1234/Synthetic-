import java.net.*;
import java.io.*;
public class Server{
    public static void main(String[]args){
    ServerSocket ss = new ServerSocket(3000);
    Socket s = ss.accept();
    System.out.print("Client Accepted")


    }
}
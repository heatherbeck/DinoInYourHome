package com.petroproject;
import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.support.v7.app.ActionBarActivity;
import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactContext;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {
  @Override
    protected void onCreate(Bundle savedInstanceState) {
      ReactContext ctx = getReactInstanceManager().getCurrentReactContext();
      if(ctx == null) {
          SplashScreen.show(this,true);
      }
      super.onCreate(savedInstanceState);
    }
    @Override
    protected String getMainComponentName() {
        return "petroproject";
    }
}

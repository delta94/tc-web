package outline

import java.io.File

object Config {

    object dir {
        val userHome = getUserHome()
        val repos = File(userHome, "r/dev")
        val tcWeb = File(repos, "tc-web")
//        val tcWebCommon = File(tcWeb, "common")
        val tcWebClient = File(tcWeb, "client")
        val outlines = File(tcWebClient, "src/data/outlines")
    }

    fun getUserHome(): File {
        return File(System.getProperty("user.home"))
    }

}
package infrastructure

import com.github.tminglei.slickpg.{PgDateSupportJoda, PgPlayJsonSupport}
import slick.jdbc.PostgresProfile

trait MyPostgresProfile extends PostgresProfile with PgPlayJsonSupport with PgDateSupportJoda {
  override val pgjson = "jsonb"
  override val api: API = new API {}
  val plainAPI = new API with PlayJsonPlainImplicits

  trait API extends super.API with JsonImplicits with DateTimeImplicits {

  }

}

object MyPostgresProfile extends MyPostgresProfile

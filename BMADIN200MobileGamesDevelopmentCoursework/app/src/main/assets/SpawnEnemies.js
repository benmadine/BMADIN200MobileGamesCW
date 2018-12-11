//
// ─── Enemy SPAWN SCRIPT ────────────────────────────────────────────────────────
//


//
// ────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: E N E M Y   S P A W N   C L A S S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────
//

// Class inherits from the sprite class.
class EnemySpawnClass extends SpriteClass
{
    EnemyWaves()
    {
        // Calls this method every five seconds.
        setInterval(this.EnemyAssign, 5000);
    }
}